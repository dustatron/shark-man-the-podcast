import s from '../sass/pages/bts.module.scss';
import PageTitle from '../components/PageTitle';

const bts = () => {
  return (
    <div className={s.bts}>
      <PageTitle title={'Behind the scenes'} />
    </div>
  );
};

export default bts;
