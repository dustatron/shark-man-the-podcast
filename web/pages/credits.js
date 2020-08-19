import s from '../sass/pages/credits.module.scss';
import PageTitle from '../components/PageTitle';
const credits = () => {
  return (
    <div className={s.credits}>
      <PageTitle title={'Credits'} />
    </div>
  );
};

export default credits;
