import Head from 'next/head';
import styles from '../styles/Home.module.css';
import s from '../sass/components/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shark-Man the Podcast</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={s.index}>
        <h1>Shark-Man the podcast coming soon.</h1>
      </main>
    </div>
  );
}
