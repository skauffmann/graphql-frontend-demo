import Link from 'next/link';
import styles from './router-links.module.css';
import { useRouter } from 'next/router';

export const PageRouterLinks = () => {
  const router = useRouter();

  return (
    <ul className={styles.container}>
      <li>
        <Link
          href="/pages-router/client-only"
          aria-current={
            router.pathname.endsWith('client-only') ? 'page' : undefined
          }
        >
          Client only
        </Link>
      </li>
      <li>
        <Link
          href="/pages-router/ssr"
          aria-current={router.pathname.endsWith('ssr') ? 'page' : undefined}
        >
          Server Side Rendering
        </Link>
      </li>
    </ul>
  );
};
