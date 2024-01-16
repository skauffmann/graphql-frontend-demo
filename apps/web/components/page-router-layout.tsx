import styles from './layout.module.css';
import { PageRouterLinks } from './page-router-links';

type PageRouterLayoutProps = { children?: React.ReactNode };
export default function PageRouterLayout({ children }: PageRouterLayoutProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pages Router</h1>
      <PageRouterLinks />
      {children}
    </main>
  );
}
