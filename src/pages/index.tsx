import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          AR Developers Foundation Series
        </Heading>
        <p className={styles.heroSubtitle}>
          Colearning Agentic AI with Python and TypeScript – Spec Driven Reusable Intelligence
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/intro">
            Start Reading →
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.heroButtonSecondary)}
            to="/blog">
            Explore AR Developers 🎓
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Colearning Agentic AI with Python and TypeScript – Spec Driven Reusable Intelligence. Build production-ready intelligent systems.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
