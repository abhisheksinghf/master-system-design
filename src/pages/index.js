import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const learningHighlights = [
  'How large-scale systems are architected from first principles',
  'Trade-offs across scalability, consistency, latency, and cost',
  'How to design databases, caches, queues, and global architectures',
  'SRE, observability, reliability, and fault-tolerance playbooks',
  'Interview-ready system design frameworks and communication strategy',
];

const trackPills = [
  'Fundamentals',
  'Databases',
  'Caching',
  'Distributed Systems',
  'Security',
  'Cloud Native',
  'SRE',
  'Architecture Patterns',
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <p className={styles.kicker}>Designing Scalable Systems, Step by Step</p>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>

        <div className={styles.ctaRow}>
          <Link className={clsx('button button--lg', styles.primaryCta)} to="/docs/content">
            Start the Roadmap
          </Link>
          <Link className={clsx('button button--lg', styles.secondaryCta)} to="/docs/intro">
            Quick Introduction
          </Link>
        </div>

        <div className={styles.trackPills}>
          {trackPills.map((track) => (
            <span key={track} className={styles.trackPill}>
              {track}
            </span>
          ))}
        </div>

        <section className={styles.overviewCard} aria-label="Program overview">
          <Heading as="h2" className={styles.overviewTitle}>
            What you&apos;re going to learn
          </Heading>
          <ul className={styles.overviewList}>
            {learningHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className={styles.contributionCard} aria-label="Contributions">
          <Heading as="h2" className={styles.contributionTitle}>
            Open for Contributions 🚀
          </Heading>
          <p className={styles.contributionText}>
            This project is community-driven and open to improvements.
            If you'd like to enhance explanations, fix issues, add diagrams,
            or contribute new case studies, feel free to submit a pull request.
          </p>
          <Link
            className={clsx('button button--md', styles.contributionCta)}
            to="https://github.com/abhisheksinghf/master-system-design"
          >
            Contribute on GitHub
          </Link>
        </section>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Master system design with a complete roadmap from fundamentals to advanced architecture.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
