import client from '../client';
import groq from 'groq';

import s from '../sass/pages/bts.module.scss';
import PageTitle from '../components/PageTitle';

const bts = ({ bts }) => {
  return (
    <>
      <PageTitle title={bts.title} />
      <div className={s.blurb}>
        {bts.subtitle ? ' ' : <div className='loading'> </div>}
        <div className={s['blurb-title']}>{bts.subtitle}</div>
        <div className={s['blurb-body']}>{bts.copy}</div>
      </div>
      <div className={s.bts}>
        <div className={s['bts-one-one']}>
          <img src='/BTS/01-01.png' alt='recording' />
        </div>
        <div className={s['bts-one-two']}>
          <img src='/BTS/01-02.png' alt='recording' />
        </div>
        <div className={s['bts-one-three']}>
          <img src='/BTS/01-03.png' alt='recording' />
        </div>

        <div className={s['bts-two-one']}>
          <img src='/BTS/02-01.png' alt='recording' />
        </div>
        <div className={s['bts-two-two']}>
          <img src='/BTS/02-02.png' alt='recording' />
        </div>
        <div className={s['bts-two-three']}>
          <img src='/BTS/02-03a.png' alt='recording' />
        </div>

        <div className={s['bts-three-one']}>
          <img src='/BTS/03-01.png' alt='recording' />
        </div>
        <div className={s['bts-three-two']}>
          <img src='/BTS/03-02.png' alt='recording' />
        </div>
        <div className={s['bts-four-one']}>
          <img src='/BTS/04-01.png' alt='recording' />
        </div>
        <div className={s['bts-four-two']}>
          <img src='/BTS/04-02.png' alt='recording' />
        </div>
      </div>
    </>
  );
};

export default bts;
bts.getInitialProps = async () => ({
  bts: await client.fetch(groq`
    *[_type == "section" && slug.current == "bts"][0]   `),
});
