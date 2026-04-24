import { chapters } from '@/data/chapters';
import { notFound } from 'next/navigation';
import ChapterHeader from '@/components/ChapterHeader';
import SectionCard from '@/components/SectionCard';
import KeyTakeaway from '@/components/KeyTakeaway';
import DiscussionPrompt from '@/components/DiscussionPrompt';
import ChapterNav from '@/components/ChapterNav';
import Breadcrumb from '@/components/Breadcrumb';

export const dynamicParams = false;

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export default function ChapterPage({
  params,
}: {
  params: { slug: string };
}) {
  const chapter = chapters.find((ch) => ch.slug === params.slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((ch) => ch.slug === params.slug);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : undefined;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : undefined;

  return (
    <article className="py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Capitoli', href: '/#capitoli' },
          { label: chapter.title },
        ]}
      />

      {/* Chapter Header */}
      <ChapterHeader
        title={chapter.title}
        description={chapter.description}
        chapterNumber={chapter.id}
      />

      {/* Sections */}
      <div className="mt-8 space-y-6">
        {chapter.sections.map((section, idx) => (
          <div key={idx}>
            <SectionCard title={section.title} content={section.content} />
          </div>
        ))}
      </div>

      {/* Key Takeaways */}
      {chapter.keyTakeaways.length > 0 && (
        <section className="mt-12 pt-8 border-t border-blue-700">
          <KeyTakeaway items={chapter.keyTakeaways} />
        </section>
      )}

      {/* Discussion Prompts */}
      {chapter.discussionPrompts && chapter.discussionPrompts.length > 0 && (
        <section className="mt-8">
          <DiscussionPrompt prompts={chapter.discussionPrompts} />
        </section>
      )}

      {/* Navigation */}
      <ChapterNav
        previousChapter={previousChapter}
        nextChapter={nextChapter}
        currentChapter={chapter.id}
        totalChapters={chapters.length}
      />
    </article>
  );
}
