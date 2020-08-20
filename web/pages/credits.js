import client from '../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

import s from '../sass/pages/credits.module.scss';
import PageTitle from '../components/PageTitle';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const credits = ({ crew, cast }) => {
  return (
    <div className={s.credits}>
      <PageTitle title={'Credits'} />
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
                data here
              </div>
            </div>
            <div>{person.jobs}</div>
          </div>
        ))}
      </div>
      <h2>Cast</h2>
      <div className={s['credits-cast']}>
        {cast.map((person) => person.name)}
      </div>
    </div>
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
