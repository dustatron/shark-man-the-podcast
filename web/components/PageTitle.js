import s from '../sass/components/_page-title.module.scss';

const PageTitle = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

export default PageTitle;
