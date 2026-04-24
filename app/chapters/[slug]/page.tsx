import { chapters } from '@/data/chapters';
import { notFound } from 'next/navigation';
import ChapterHeader from '@/components/ChapterHeader';
import SectionCard from '@/components/SectionCard';
import KeyTakeaway from '@/components/KeyTakeaway';
import DiscussionPrompt from '@/components/DiscussionPrompt';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default function ChapterPage({ params }: Props) {
  const { slug } = params;
  const chapter = chapters.find((ch) => ch.slug === slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((ch) => ch.slug === slug);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: chapter.title },
          ]}
        />

        {/* Chapter Header */}
        <div className="mt-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-400 text-navy-900 px-4 py-2 rounded font-bold">
              Cap. {chapter.id}
            </div>
            <div className="text-sm text-cyan-300">
              {currentIndex + 1} / {chapters.length}
            </div>
          </div>

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

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-navy-600">
          {previousChapter ? (
            <Link
              href={`/chapters/${previousChapter.slug}`}
              className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition"
            >
              <span>← Capitolo Precedente</span>
            </Link>
          ) : (
            <div></div>
          )}

          <div className="text-sm text-gray-400">
            Capitolo {currentIndex + 1} di {chapters.length}
          </div>

          {nextChapter ? (
            <Link
              href={`/chapters/${nextChapter.slug}`}
              className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition"
            >
              <span>Capitolo Successivo →</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
