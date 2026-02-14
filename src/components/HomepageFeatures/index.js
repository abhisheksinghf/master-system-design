import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Complete Learning Journey',
    badge: '17 modules',
    description:
      'Go from first principles to advanced distributed architecture with a structured, progressive roadmap.',
  },
  {
    title: 'Interview + Real-World Focus',
    badge: 'Practical',
    description:
      'Every module blends design fundamentals, trade-offs, and interview framing so you can communicate confidently.',
  },
  {
    title: 'Production Thinking',
    badge: 'Scalability',
    description:
      'Learn how reliability, observability, cost, security, and cloud-native patterns fit together in real systems.',
  },
];

function Feature({title, badge, description}) {
  return (
    <article className={clsx('col col--4', styles.cardWrap)}>
      <div className={styles.featureCard}>
        <span className={styles.badge}>{badge}</span>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Why this master system design guide stands out</Heading>
          <p>
            Crafted for serious learners who want depth, structure, and premium clarity.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
