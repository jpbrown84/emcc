import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import { HelloWorld } from '@/hello/components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ennismore GitHub</title>
        <meta name="description" content="Ennismore GitHub Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <HelloWorld />
      </main>
    </div>
  );
};

export default Home;
