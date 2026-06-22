import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPost } from '@/utils/blog/posts';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () =>
  BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Quantum Robotics`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.isoDate,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#121212] text-[#f2f2f2]">
      <header className="mx-auto max-w-5xl px-6 pb-10 pt-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex text-sm font-semibold text-[#7fbf4d] hover:text-[#9ee767]"
        >
          Back to insights
        </Link>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#5a7d2f]">
          {post.category}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-[#d0d0d0]">
          {post.dek}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#b0b0b0]">
          <span>{post.date}</span>
          <span>/</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <div className="relative h-[280px] overflow-hidden rounded-lg border border-[#2d2d2d] bg-[#202820] md:h-[420px]">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          <section className="rounded-lg border border-[#2d2d2d] bg-[#1e1e1e] p-6">
            <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
            <ul className="mt-5 space-y-3 text-[#d0d0d0]">
              {post.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#5a7d2f]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-white">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-5 text-lg leading-8 text-[#c9c9c9]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="h-fit rounded-lg border border-[#2d2d2d] bg-[#1e1e1e] p-6">
          <h2 className="text-lg font-semibold text-white">Research base</h2>
          <div className="mt-4 space-y-4">
            {post.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="block text-sm leading-6 text-[#b0b0b0] hover:text-[#7fbf4d]"
              >
                {source.title}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
