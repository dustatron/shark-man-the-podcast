import s from '../sass/pages/contact.module.scss';
import PageTitle from '../components/PageTitle';

const contact = () => {
  return (
    <div className={s.contact}>
      <PageTitle title={'Contact Us'} />
    </div>
  );
};

export default contact;
