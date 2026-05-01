import type { MetadataRoute } from 'next';
import { chapters } from '@/data/chapters';

const baseUrl = 'https://ai-fundamentals-showcase.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const chapterUrls = chapters.map((chapter) => ({
    url: `${baseUrl}/chapters/${chapter.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...chapterUrls,
  ];
}
