import NavMenu from '../components/NavMenu';
import Header from '../components/Header';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/base/_base.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shark-Man the Podcast</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
          rel='stylesheet'
        />

        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          name='description'
          content='Shark-Man, or Sharkman is a magical radio theater or audio drama. It is set on the Oregon Coast and details a story about a man who finds out he has shark powers and with the help from his friends has to save the world from an evil wizard.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <NavMenu />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
