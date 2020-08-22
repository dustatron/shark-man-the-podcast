import React, { useState, useEffect } from 'react';

import client from '../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

import s from '../sass/pages/credits.module.scss';
import PageTitle from '../components/PageTitle';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const credits = () => {
  const [crew, setCrew] = useState(null);
  const [cast, setCast] = useState(null);
  const [section, setSection] = useState(null);

  useEffect(() => {
    getDataFor('crew').then((data) => setCrew(data));
    getDataFor('cast').then((data) => setCast(data));
    getDataFor('section', 'credits').then((data) => setSection(data));
  }, []);

  const getDataFor = async (value, params) => {
    if (params) {
      return await client.fetch(groq`
        *[_type == "${value}" && slug.current == "${params}"][0]
        `);
    } else {
      return await client.fetch(groq`
        *[_type == "${value}"]
        `);
    }
  };

  return (
    <>
      <PageTitle title={section ? section.title : ' '} />
      <div className={s.credits}>
        {crew || cast ? ' ' : <div className='loading'> </div>}
        <h2>Creative & Production</h2>
        <div className={s['credits-crew']}>
          {crew &&
            crew.map((person) => (
              <div key={person._id} className={s['credits-crew-member']}>
                <div className={s['credits-crew-member-name']}>
                  {person.name}
                </div>
                <div className={s['credits-crew-member-body']}>
                  <div className={s['credits-crew-member-body-img']}>
                    <img src={urlFor(person.image)} />
                  </div>
                  <div className={s['credits-crew-member-body-info']}>
                    <BlockContent blocks={person.bio} {...client.config()} />
                  </div>
                </div>
                <div className={s['credits-crew-member-job']}>
                  {person.jobs.split(',').map((job, index) => (
                    <div
                      key={`${index}_${job}`}
                      className={s['credits-crew-member-job-item']}>
                      {job}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h2>Cast</h2>
        <div className={s['credits-cast']}>
          {cast &&
            cast.map((person) => (
              <div key={person._id} className={s['credits-cast-member']}>
                <div className={s['credits-cast-member-name']}>
                  {person.name}
                </div>
                <div className={s['credits-cast-member-body']}>
                  <div className={s['credits-cast-member-body-img']}>
                    <img src={urlFor(person.image)} />
                  </div>
                  <div className={s['credits-cast-member-body-info']}>
                    <div className={s['credits-cast-member-body-info-voice']}>
                      <h3>Voice for:</h3>
                      {person.voiced.split(',').map((voice, index, array) => (
                        <div
                          key={`${index}_${voice}`}
                          className={
                            s['credits-cast-member-body-info-voice-item']
                          }>
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
