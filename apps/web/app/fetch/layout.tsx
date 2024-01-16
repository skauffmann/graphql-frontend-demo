import styles from '../../components/layout.module.css';
import { ApolloAppRouterProvider } from '../../shared/apollo/apollo-app-router-provider';

type AppRouterLayoutProps = { children?: React.ReactNode };
export default function AppRouterLayout({ children }: AppRouterLayoutProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Fetch</h1>
      <ApolloAppRouterProvider>{children}</ApolloAppRouterProvider>
    </main>
  );
}
