import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <section className='navbar'>
      <nav className='navbar__menu'>
        <ul className='navbar__list'>
          <li className='navbar__link'>
            <a href='#aboutProject' className='navbar__link_title hover'>О проекте</a>
          </li>
          <li className='navbar__link'>
            <a href='#techs' className='navbar__link_title hover'>Технологии</a>
          </li>
          <li className='navbar__link'>
            <a href='#me' className='navbar__link_title hover'>Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
