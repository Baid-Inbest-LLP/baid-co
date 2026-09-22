import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import { blogPosts, firm } from '@/constants/site';

import classes from './blogs.module.scss';

export const metadata = {
  title: 'Blogs',
  description: `Insights on tax, audit, GST, and business finance from ${firm.name}.`,
};

function formatDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
}

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights for clearer financial decisions."
        variant="blogs"
      />

      <section className={classes.section}>
        <Container>
          <Stagger className={classes.list}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blogs/${post.slug}`} className={classes.card}>
                  <div className={classes.meta}>
                    <span className={classes.category}>{post.category}</span>
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className={classes.titleRow}>
                    <h2>{post.title}</h2>
                    <IconArrowUpRight size={20} className={classes.arrow} aria-hidden />
                  </div>
                  <p>{post.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
