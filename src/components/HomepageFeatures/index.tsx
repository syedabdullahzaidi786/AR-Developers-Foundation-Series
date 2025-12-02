import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// AI Development Spectrum Section
const SpectrumItems = [
  {
    title: 'AI Assisted',
    emoji: '🤝',
    description: 'AI enhances your productivity with code completion, debugging assistance, and documentation generation.',
    features: [
      'Code completion & suggestions',
      'Bug detection & debugging',
      'Documentation generation'
    ]
  },
  {
    title: 'AI Driven',
    emoji: '🚀',
    description: 'AI generates significant code from specifications. You act as architect, director, and reviewer.',
    features: [
      'Code generation from specs',
      'Automated testing & optimization',
      'Architecture from requirements'
    ]
  },
  {
    title: 'AI Native',
    emoji: '🧠',
    description: 'Applications architected around AI capabilities. LLMs and agents are core functional components.',
    features: [
      'Natural language interfaces',
      'Intelligent automation & reasoning',
      'Agent orchestration systems'
    ]
  }
];

// What Makes This Different Section
const DifferenceItems = [
  {
    title: 'Co-Learning Philosophy',
    emoji: '👥',
    description: 'Learn alongside AI agents. Not just using AI as a tool, but co-creating where both human and AI learn together.'
  },
  {
    title: 'Dual Language Mastery',
    emoji: '💻',
    description: 'Python for reasoning & intelligence, TypeScript for interaction & UI. Master the bilingual AI-native stack.'
  },
  {
    title: 'Spec-Driven Development',
    emoji: '📋',
    description: 'Write specifications that both humans and AI understand. Specs become executable blueprints for intelligent systems.'
  },
  {
    title: 'Agentic AI Systems',
    emoji: '🤖',
    description: 'Build with OpenAI Agents SDK and Google ADK. Create agents that reason, act, and collaborate autonomously.'
  },
  {
    title: 'Production-Ready Architecture',
    emoji: '☁️',
    description: 'Cloud-native deployment with Docker, Kubernetes, Dapr, and Ray. Scalable, secure, fault-tolerant systems.'
  },
  {
    title: 'Complete Learning Journey',
    emoji: '📚',
    description: '46 comprehensive chapters from programming basics to deploying enterprise agentic AI systems in production.'
  }
];

// Organizational AI Maturity Levels
const MaturityLevels = [
  {
    level: '1',
    title: 'AI Awareness',
    description: 'Individual developers experimenting with AI coding tools. Early AI Assisted Development.'
  },
  {
    level: '2',
    title: 'AI Adoption',
    description: 'Organization-wide adoption with governance. Established guidelines and security policies.'
  },
  {
    level: '3',
    title: 'AI Integration',
    description: 'AI-Driven Development practices. Specs become living documentation. Workflows redesigned around AI collaboration.'
  },
  {
    level: '4',
    title: 'AI-Native Products',
    description: 'Products where AI/LLMs are core components. Agent orchestration, natural language interfaces, intelligent systems.'
  },
  {
    level: '5',
    title: 'AI-First Enterprise',
    description: 'Entire organization AI-native. Custom models, self-improving systems, AI embedded in every aspect.'
  }
];

function SpectrumCard({ title, emoji, description, features }: typeof SpectrumItems[0]) {
  return (
    <div className={styles.spectrumCard}>
      <div className={styles.cardEmoji}>{emoji}</div>
      <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
      <p className={styles.cardDescription}>{description}</p>
      <ul className={styles.featureList}>
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

function DifferenceCard({ title, emoji, description }: typeof DifferenceItems[0]) {
  return (
    <div className={styles.differenceCard}>
      <div className={styles.cardEmoji}>{emoji}</div>
      <Heading as="h4" className={styles.cardTitle}>{title}</Heading>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

function MaturityCard({ level, title, description }: typeof MaturityLevels[0]) {
  return (
    <div className={styles.maturityCard}>
      <div className={styles.maturityLevel}>Level {level}</div>
      <Heading as="h4" className={styles.cardTitle}>{title}</Heading>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      {/* AI Development Spectrum Section */}
      <section className={styles.spectrumSection}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            The AI Development Spectrum
          </Heading>
          <p className={styles.sectionSubtitle}>
            Three distinct approaches to AI in software development. This book teaches you both AI-Driven and AI-Native development.
          </p>
          <div className={styles.spectrumGrid}>
            {SpectrumItems.map((props, idx) => (
              <SpectrumCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different Section */}
      <section className={styles.differenceSection}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            What Makes This Book Different
          </Heading>
          <p className={styles.sectionSubtitle}>
            A comprehensive, production-focused approach to co-learning with AI in the spec-driven way
          </p>
          <div className={styles.differenceGrid}>
            {DifferenceItems.map((props, idx) => (
              <DifferenceCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* Organizational AI Maturity Levels Section */}
      <section className={styles.maturitySection}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Organizational AI Maturity Levels
          </Heading>
          <p className={styles.sectionSubtitle}>
            Where does your organization stand? Understanding these levels helps you chart your path forward.
          </p>
          <div className={styles.maturityGrid}>
            {MaturityLevels.map((props, idx) => (
              <MaturityCard key={idx} {...props} />
            ))}
          </div>
          <p className={styles.maturityNote}>
            This book prepares you for Levels 3-4: Master AI-Driven workflows and build AI-Native products
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            From Automation to Intelligence<br />From Coding to Co-Creating
          </Heading>
          <p className={styles.sectionSubtitle}>
            AI-native development is not about replacing developers—it's about amplifying intelligence. Learn to collaborate with reasoning entities that learn with you.
          </p>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonColumn}>
              <h3 className={styles.comparisonHeader}>Traditional Development</h3>
              <div className={styles.comparisonItem}>
                <strong>Instruction-Based</strong>
                <p>Tell computers exactly what to do with precise syntax</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Solo Coding</strong>
                <p>Developer writes every line manually</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Documentation as Afterthought</strong>
                <p>Specs are static contracts written post-facto</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Linear Learning</strong>
                <p>Learn syntax → Build simple projects → Slowly scale</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Code-First</strong>
                <p>Focus on implementation details from day one</p>
              </div>
            </div>
            <div className={styles.comparisonColumn}>
              <h3 className={styles.comparisonHeader}>AI-Native Development</h3>
              <div className={styles.comparisonItem}>
                <strong>Intent-Based</strong>
                <p>Describe what you want; AI reasons how to build it</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Co-Learning Partnership</strong>
                <p>You and AI teach each other through iteration</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Specs as Living Blueprints</strong>
                <p>Specifications drive code, tests, and documentation</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Production-First Learning</strong>
                <p>Build real agentic systems from day one</p>
              </div>
              <div className={styles.comparisonItem}>
                <strong>Architecture-First</strong>
                <p>Design intelligent collaborations, not just code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Co-Learn with AI?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Join the revolution where coding becomes conversation and software becomes alive
          </p>
          <div className={styles.ctaButtons}>
            <a href="/docs/intro" className={clsx('button button--primary button--lg', styles.ctaButton)}>
              Begin Your Journey
            </a>
            <a href="/blog" className={clsx('button button--outline button--lg', styles.ctaButtonOutline)}>
              Explore Resources
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
