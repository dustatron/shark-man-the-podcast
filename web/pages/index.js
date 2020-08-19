import client from '../client';
import groq from 'groq';

import s from '../sass/pages/index.module.scss';
import PageTitle from '../components/PageTitle';

export default function Home({ episodes, blurb }) {
  return (
    <div>
      <PageTitle title={'Podcast Episodes'} />
      <main className={s.index}>
        {/* --------- Sub Title and icons ------------ */}
        <div className={s['index-listen']}>
          <h2>Where to listen</h2>
          <div className={s['index-listen-icons']}>
            <ul>
              <li>
                <a href='/' target='_blank'>
                  <img src='/icons/apple_podcasts.png' alt='itunes' />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src='/icons/spotify.png' alt='spotify' />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src='/icons/google_podcasts.png' alt='google podcasts' />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src='/icons/pocket_casts.png' alt='pocket casts' />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src='/icons/radiopublic.png' alt='radiopublic' />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src='/icons/overcast.png' alt='overcast' />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src='/icons/breaker.png' alt='breaker' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s['index-blurb']}>{blurb[0].copy}</div>
        <div className={s['index-list']}>
          {episodes.map((ep) => (
            <div className={s['index-list-item']}>
              <div className={s['index-list-item-head']}>
                Episode {ep.epNumber}
              </div>
              <iframe
                src={`https://anchor.fm/shark-man-podcast/embed/episodes/${ep.linkId}`}
                height='102px'
                frameborder='0'
                scrolling='no'></iframe>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => ({
  episodes: await client.fetch(groq`
    *[_type == "episode"] | order(epNumber asc) 
    `),
  blurb: await client.fetch(groq`
    *[_type == "section" && slug.current == "home"]   `),
});
