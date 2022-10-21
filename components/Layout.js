import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title> {title ? title + ' Easy To Buy ' : 'Easy To Buy'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-15 items-center justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Easy To Buy</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="text-lg font-bold">Cart</a>
              </Link>
              <Link href="/login">
                <a className="text-lg font-bold">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
}
