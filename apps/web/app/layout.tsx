import Link from 'next/link';
import '../components/globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
