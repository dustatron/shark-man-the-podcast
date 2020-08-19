import s from '../sass/components/_header.module.scss';
const header = () => {
  return (
    <div className={s.header}>
      <div className={s['header-box']}>
        <div className={s['header-box-img']}>
          <img src='/img/shark-rainbow.png' alt='shark rainbow' />
        </div>
        <div className={s['header-box-brand']}>
          <div>Shark-Man</div>
          <div>The Podcast</div>
        </div>
      </div>
    </div>
  );
};

export default header;
