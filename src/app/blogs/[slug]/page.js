import Link from 'next/link';
import { notFound } from 'next/navigation';

import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import Reveal from '@/components/motion/Reveal';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import { blogPosts, getBlogBySlug } from '@/constants/site';

import classes from './blog.module.scss';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return { title: 'Blog' };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} variant="blogs" />

      <section className={classes.section}>
        <Container className={classes.layout}>
          <Reveal className={classes.meta}>
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime}</span>
          </Reveal>

          <Reveal delay={0.08} className={classes.body}>
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.12} className={classes.back}>
            <Link href="/blogs">← Back to all blogs</Link>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
