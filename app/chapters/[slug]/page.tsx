import { chapters } from '@/data/chapters';
import { notFound } from 'next/navigation';
import ChapterHeader from '@/components/ChapterHeader';
import SectionCard from '@/components/SectionCard';
import KeyTakeaway from '@/components/KeyTakeaway';
import DiscussionPrompt from '@/components/DiscussionPrompt';
import CodeSnippet from '@/components/CodeSnippet';
import ChapterQuiz from '@/components/ChapterQuiz';
import ChapterMediaSlots from '@/components/ChapterMediaSlots';
import Breadcrumb from '@/components/Breadcrumb';
import ChapterSidebar from '@/components/ChapterSidebar';
import Link from 'next/link';

export const revalidate = 60; // ISR: Revalidate every 60 seconds
export const dynamicParams = true; // Allow on-demand generation

export function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;

  console.log('[Chapter Page] Rendering slug:', slug, 'time:', new Date().toISOString());

  const chapter = chapters.find((ch) => ch.slug === slug);

  if (!chapter) {
    console.log('[Chapter Page] Chapter not found for slug:', slug);
    notFound();
  }

  const currentIndex = chapters.findIndex((ch) => ch.slug === slug);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  const chapterNum = currentIndex + 1;
  const totalChapters = chapters.length;
  const progressPercent = (chapterNum / totalChapters) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb — full width above grid */}
        <div className="pl-12 md:pl-0 mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Capitoli', href: '/#chapters' },
              { label: `${String(chapter.id).padStart(2, '0')} — ${chapter.title}` },
            ]}
          />
        </div>

        {/* Main grid: sidebar + content */}
        <div className="flex gap-0 md:gap-6 lg:gap-8">
          {/*
            Single ChapterSidebar instance:
            - Mobile: w-0 (no layout space) — sidebar is fixed overlay, hamburger is fixed top-right
            - Desktop (md+): w-64/w-72 sticky sidebar in flex layout
          */}
          <div className="w-0 overflow-visible md:w-64 lg:w-72 flex-shrink-0">
            <ChapterSidebar currentSlug={slug} />
          </div>

          {/* Main content area */}
          <main className="flex-1 min-w-0">
            {/* Progress bar */}
            <div className="bg-navy-800/50 border border-navy-600 rounded-xl px-5 py-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-cyan-300">
                  Capitolo {chapterNum} di {totalChapters}
                </span>
                <span className="text-xs text-gray-400 font-mono">{Math.round(progressPercent)}%</span>
              </div>
              <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Chapter Header */}
            <div className="mb-8">
              <ChapterHeader
                title={chapter.title}
                description={chapter.description}
                chapterNumber={chapter.id}
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 mb-12">
              {chapter.sections.map((section, idx) => (
                <SectionCard key={idx} title={section.title} content={section.content} />
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mb-12">
              <KeyTakeaway items={chapter.keyTakeaways} />
            </div>

            {/* Discussion Prompts */}
            {chapter.discussionPrompts && chapter.discussionPrompts.length > 0 && (
              <div className="mb-12">
                <DiscussionPrompt prompts={chapter.discussionPrompts} />
              </div>
            )}

            {/* Media Placeholders */}
            <ChapterMediaSlots chapter={chapter} />

            {/* Code Snippets */}
            {chapter.codeSnippets && chapter.codeSnippets.length > 0 && (
              <div className="mb-12">
                <h3 className="text-cyan-300 font-bold mb-4">💻 Code Snippets</h3>
                <div className="space-y-4">
                  {chapter.codeSnippets.map((snippet, idx) => (
                    <CodeSnippet key={idx} code={snippet.code} lang={snippet.lang} label={snippet.label} />
                  ))}
                </div>
              </div>
            )}

            {/* Quiz */}
            {chapter.quiz && chapter.quiz.length > 0 && (
              <div className="mb-12">
                <h3 className="text-cyan-300 font-bold mb-4">🧠 Quiz del Capitolo</h3>
                <ChapterQuiz quiz={chapter.quiz} />
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-navy-600 gap-4">
              {previousChapter ? (
                <Link
                  href={`/chapters/${previousChapter.slug}`}
                  className="group flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-blue-500/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 font-medium text-base"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline">← Capitolo Precedente</span>
                  <span className="sm:hidden">Precedente</span>
                </Link>
              ) : (
                <div />
              )}

              <div className="text-xs text-gray-500 font-mono text-center flex-shrink-0">
                {chapterNum} / {totalChapters}
              </div>

              {nextChapter ? (
                <Link
                  href={`/chapters/${nextChapter.slug}`}
                  className="group flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-blue-500/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 font-medium text-base"
                >
                  <span className="hidden sm:inline">Capitolo Successivo →</span>
                  <span className="sm:hidden">Successivo</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
