'use client';
import Link from 'next/link';
import styles from './router-links.module.css';
import { usePathname } from 'next/navigation';

export const AppRouterLinks = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.container}>
      <li>
        <Link
          href="/app-router"
          aria-current={pathname?.endsWith('app-router') ? 'page' : undefined}
        >
          React Client Components
        </Link>
      </li>
      <li>
        <Link
          href="/app-router/rsc"
          aria-current={pathname?.endsWith('rsc') ? 'page' : undefined}
        >
          React Server Components
        </Link>
      </li>
    </ul>
  );
};
