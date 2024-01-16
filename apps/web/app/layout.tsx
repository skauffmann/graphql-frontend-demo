import '../components/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apollo Graphql Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
