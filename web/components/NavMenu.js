import s from '../sass/components/_navbar.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavMenu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className={s['navbar']}
      fixed='top'
      variant='dark'>
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
            <Link href='/' passHref>
              <Nav.Link className={s['navbar-menu-item']}>Episodes</Nav.Link>
            </Link>
            <Link href='/credits' passHref>
              <Nav.Link className={s['navbar-menu-item']}>Credits</Nav.Link>
            </Link>

            <Link href='/bts' passHref>
              <Nav.Link className={s['navbar-menu-item']}>BTS</Nav.Link>
            </Link>
            <Link href='/contact' passHref>
              <Nav.Link className={s['navbar-menu-item']}>Contact Us</Nav.Link>
            </Link>
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
