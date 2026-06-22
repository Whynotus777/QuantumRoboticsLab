import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS, CATEGORIES } from '@/utils/blog/posts';

export const metadata = {
  title: 'Insights | Quantum Robotics',
  description:
    'Research-backed perspectives on AI-native robotics, computer vision, humanoids, defense drones, and security automation.',
};

export default function BlogPage() {
  return (
    <main className="bg-[#121212] text-[#f2f2f2]">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#5a7d2f]">
          Quantum Robotics Insights
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Field notes on AI-native robotics and autonomous systems
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b0b0b0]">
          Research-backed essays on the systems, markets, and deployment
          patterns shaping robotics, defense drones, computer vision, and
          embodied AI.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded border border-[#344429] bg-[#1e1e1e] px-3 py-2 text-sm text-[#d7d7d7]"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-lg border border-[#2d2d2d] bg-[#1e1e1e]"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48 bg-[#202820]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between gap-3 text-sm">
                <span className="text-[#b0b0b0]">{post.date}</span>
                <span className="text-[#5a7d2f]">{post.category}</span>
              </div>
              <h2 className="text-xl font-semibold leading-7 text-white">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#7fbf4d]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#b0b0b0]">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-[#7fbf4d] hover:text-[#9ee767]"
              >
                Read article
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
