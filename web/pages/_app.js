import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Head from 'next/head';

import '../sass/base/_base.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shark-Man the Podcast</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'
          rel='stylesheet'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
          rel='stylesheet'></link>
      </Head>
      <Navbar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
