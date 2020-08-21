import s from '../sass/components/_navbar.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavMenu = () => {
  // const [selected, setSelected] = useState('/');

  const handleClick = (select) => {
    console.log('click');
    // setSelected(select);
  };

  return (
    <Navbar collapseOnSelect expand='lg' className={s['navbar']}>
      <Container>
        <Navbar.Brand className={s['navbar-brand']}>
          <Link href='/'>
            <a onClick={() => handleClick('/')}>
              <div>Shark-Man</div>
              <div>The Podcast</div>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className={s['navbar-menu']}>
          <Nav className='ml-auto'>
            <Nav.Link className={s['navbar-menu-item']}>
              <Link href='/'>
                <a onClick={() => handleClick('/')}>Episodes</a>
              </Link>
            </Nav.Link>
            <Nav.Link className={s['navbar-menu-item']}>
              <Link href='/credits'>
                <a onClick={() => handleClick('/')}>Credits</a>
              </Link>
            </Nav.Link>

            <Nav.Link className={s['navbar-menu-item']}>
              <Link href='/bts'>
                <a onClick={() => handleClick('/bts')}>BTS</a>
              </Link>
            </Nav.Link>
            <Nav.Link className={s['navbar-menu-item']}>
              <Link href='/contact'>
                <a>Contact Us</a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className={s['navbar']}>
    //   <div className={s['navbar-brand']}>
    //     <Link href='/'>
    //       <a
    //         onClick={() => handleClick('/')}
    //         className={selected === '/' ? s.selected : ''}>
    //         <div>Shark-Man</div>
    //         <div>The Podcast</div>
    //       </a>
    //     </Link>
    //   </div>
    //   <div className={s['navbar-menu']}>
    //     {/* <button onClick={ToggleMenu} className={s.burger}>
    //       <FaBars />
    //     </button> */}
    //     <ul className={toggle ? s.hide : s.show}>
    //       <li className={s['navbar-menu-item']}>
    //         <Link href='/'>
    //           <a
    //             onClick={() => handleClick('/')}
    //             className={selected === '/' ? s.selected : ''}>
    //             Episodes
    //           </a>
    //         </Link>
    //       </li>
    //       <li className={s['navbar-menu-item']}>
    //         <Link href='/credits'>
    //           <a
    //             onClick={() => handleClick('/credits')}
    //             className={selected === '/credits' ? s.selected : ''}>
    //             Credits
    //           </a>
    //         </Link>
    //       </li>
    //       <li className={s['navbar-menu-item']}>
    //         <Link href='/bts'>
    //           <a
    //             onClick={() => handleClick('/bts')}
    //             className={selected === '/bts' ? s.selected : ''}>
    //             BTS
    //           </a>
    //         </Link>
    //       </li>
    //       <li className={s['navbar-menu-item']}>
    //         <Link href='/contact'>
    //           <a
    //             onClick={() => handleClick('/contact')}
    //             className={selected === '/contact' ? s.selected : ''}>
    //             Contact Us
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default NavMenu;
