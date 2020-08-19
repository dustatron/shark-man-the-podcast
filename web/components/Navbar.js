import s from '../sass/components/_navbar.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [selected, setSelected] = useState('/');

  const handleClick = (select) => {
    setSelected(select);
  };

  return (
    <div className={s['navbar']}>
      <div className={s['navbar-brand']}>
        <Link href='/'>
          <a
            onClick={() => handleClick('/')}
            className={selected === '/' ? s.selected : ''}>
            <div>Shark-Man</div>
            <div>The Podcast</div>
          </a>
        </Link>
      </div>
      <div className={s['navbar-menu']}>
        <ul>
          <li className={s['navbar-menu-item']}>
            <Link href='/'>
              <a
                onClick={() => handleClick('/')}
                className={selected === '/' ? s.selected : ''}>
                Episodes
              </a>
            </Link>
          </li>
          <li className={s['navbar-menu-item']}>
            <Link href='/credits'>
              <a
                onClick={() => handleClick('/credits')}
                className={selected === '/credits' ? s.selected : ''}>
                Credits
              </a>
            </Link>
          </li>
          <li className={s['navbar-menu-item']}>
            <Link href='/bts'>
              <a
                onClick={() => handleClick('/bts')}
                className={selected === '/bts' ? s.selected : ''}>
                BTS
              </a>
            </Link>
          </li>
          <li className={s['navbar-menu-item']}>
            <Link href='/contact'>
              <a
                onClick={() => handleClick('/contact')}
                className={selected === '/contact' ? s.selected : ''}>
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
