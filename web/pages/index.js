import client from '../client';
import groq from 'groq';

import s from '../sass/pages/index.module.scss';
import PageTitle from '../components/PageTitle';

export default function Home({ episodes, section }) {
  return (
    <>
      <PageTitle title={section.title} />
      <main className={s.index}>
        {/* --------- Sub Title and icons ------------ */}
        <div className={s['index-listen']}>
          <h2>Where to listen</h2>
          <div className={s['index-listen-icons']}>
            <ul>
              <li>
                <a
                  href='https://podcasts.apple.com/us/podcast/shark-man-the-podcast/id1527354688'
                  target='_blank'>
                  <img src='/icons/apple_podcasts.png' alt='itunes' />
                </a>
              </li>
              <li>
                <a
                  href='https://open.spotify.com/show/5JvwAsPdwBNa90DU4Sz6pX'
                  target='_blank'>
                  <img src='/icons/spotify.png' alt='spotify' />
                </a>
              </li>
              <li>
                <a
                  href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9mYzFmYTBjL3BvZGNhc3QvcnNz'
                  target='_blank'>
                  <img src='/icons/google_podcasts.png' alt='google podcasts' />
                </a>
              </li>
              <li>
                <a href='https://pca.st/urtucoi6' target='_blank'>
                  <img src='/icons/pocket_casts.png' alt='pocket casts' />
                </a>
              </li>
              <li>
                <a
                  href='https://radiopublic.com/sharkman-the-podcast-GbJQBQ'
                  target='_blank'>
                  <img src='/icons/radiopublic.png' alt='radiopublic' />
                </a>
              </li>
              <li>
                <a
                  href='https://overcast.fm/itunes1527354688/shark-man-the-podcast'
                  target='_blank'>
                  <img src='/icons/overcast.png' alt='overcast' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.breaker.audio/shark-man-the-podcast'
                  target='_blank'>
                  <img src='/icons/breaker.png' alt='breaker' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s['index-blurb']}>{section.copy}</div>
        <div className={s['index-list']}>
          {episodes ? <></> : <div className='loading'> </div>}
          {episodes.map((ep) => (
            <div key={ep._id} className={s['index-list-item']}>
              <div className={s['index-list-item-head']}>
                Episode {ep.epNumber}
              </div>
              <iframe
                src={`https://anchor.fm/shark-man-podcast/embed/episodes/${ep.linkId}`}
                height='102px'
                frameBorder='0'
                scrolling='no'></iframe>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

Home.getInitialProps = async () => ({
  episodes: await client.fetch(groq`
    *[_type == "episode"] | order(epNumber asc) 
    `),
  section: await client.fetch(groq`
    *[_type == "section" && slug.current == "home"][0]   `),
});
