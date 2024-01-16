import { AppRouterLinks } from '../../components/app-router-links';
import styles from '../../components/layout.module.css';
import { ApolloAppRouterProvider } from '../../shared/apollo/apollo-app-router-provider';

type AppRouterLayoutProps = { children?: React.ReactNode };
export default function AppRouterLayout({ children }: AppRouterLayoutProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>App Router</h1>
      <AppRouterLinks />
      <ApolloAppRouterProvider>{children}</ApolloAppRouterProvider>
    </main>
  );
}
