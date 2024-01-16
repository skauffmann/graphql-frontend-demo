import Image from 'next/image';
import styles from './page.module.css';

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

const LINKS = [
  {
    title: 'Fetch',
    href: '/fetch',
    description: 'Fetch API',
  },
  {
    title: 'Relay',
    href: '/relay',
    description: 'Relay',
  },
  {
    title: 'Apollo Client',
    href: '/pages-router/client-only',
    description: 'Apollo Client - Nextjs Pages Router',
  },
  {
    title: 'Apollo Client',
    href: '/app-router',
    description: 'Apollo Client - Nextjs App Router',
  },
  {
    title: 'Apollo Server',
    href: 'http://localhost:4000/',
    description: 'Apollo Server',
  },
  {
    title: 'Docs',
    href: 'https://www.apollographql.com/docs/',
    description: 'Learn more about Apollo Graphql with their documentation',
  },
];

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Apollo Graphql Demo</p>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt=""
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className={styles.logoGradientContainer}>
              <Gradient className={styles.logoGradient} conic small />
            </div>

            <div className={styles.logo}>
              <Image
                alt="Apollo GraphQL"
                height={171}
                priority
                src="apollo-graphql.svg"
                width={500}
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>
          <Gradient className={styles.backgroundGradient} conic />
        </div>
      </div>

      <div className={styles.grid}>
        {LINKS.map(({ title, href, description }) => (
          <a
            className={styles.card}
            href={href}
            key={title}
            title={title}
            target="_blank"
            rel="noreferrer"
          >
            {description}
          </a>
        ))}
      </div>
    </main>
  );
}
