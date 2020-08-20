import client from '../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

import s from '../sass/pages/credits.module.scss';
import PageTitle from '../components/PageTitle';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const credits = ({ crew, cast }) => {
  return (
    <>
      <PageTitle title={'Credits'} />
      <div className={s.credits}>
        <h2>Creative & Production</h2>
        <div className={s['credits-crew']}>
          {crew.map((person) => (
            <div className={s['credits-crew-member']}>
              <div className={s['credits-crew-member-name']}>{person.name}</div>
              <div className={s['credits-crew-member-body']}>
                <div className={s['credits-crew-member-body-img']}>
                  <img src={urlFor(person.image)} />
                </div>
                <div className={s['credits-crew-member-body-info']}>
                  <BlockContent blocks={person.bio} {...client.config()} />
                </div>
              </div>
              <div className={s['credits-crew-member-job']}>
                {person.jobs.split(',').map((job) => (
                  <div className={s['credits-crew-member-job-item']}>{job}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2>Cast</h2>
        <div className={s['credits-cast']}>
          {cast.map((person) => (
            <div className={s['credits-cast-member']}>
              <div className={s['credits-cast-member-name']}>{person.name}</div>
              <div className={s['credits-cast-member-body']}>
                <div className={s['credits-cast-member-body-img']}>
                  <img src={urlFor(person.image)} />
                </div>
                <div className={s['credits-cast-member-body-info']}>
                  <div className={s['credits-cast-member-body-info-voice']}>
                    <h3>Voice for:</h3>
                    {person.voiced.split(',').map((voice, index, array) => (
                      <div
                        className={
                          s['credits-cast-member-body-info-voice-item']
                        }>
                        {' '}
                        {voice} {index < array.length - 1 ? '|' : ''}
                      </div>
                    ))}
                  </div>
                  <div className={s['credits-cast-member-body-info-bio']}>
                    <BlockContent blocks={person.bio} {...client.config()} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default credits;

credits.getInitialProps = async () => ({
  crew: await client.fetch(groq`
    *[_type == "crew"]
    `),
  cast: await client.fetch(groq`
    *[_type == "cast"]
    `),
});
