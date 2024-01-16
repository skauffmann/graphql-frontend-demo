import Link from 'next/link';

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/fetch">Fetch</Link>
      </li>
      <li>
        <Link href="/relay">Relay</Link>
      </li>
      <li>
        <Link href="/pages-router/client-only">Apollo Pages Router</Link>
      </li>
      <li>
        <Link href="/app-router">Apollo App Router</Link>
      </li>
    </ul>
  </nav>
);
