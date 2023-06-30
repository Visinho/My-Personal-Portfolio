import React from 'react';
import "./header.css";
import CTA from './CTA';
import Official1 from "../../assets/Official1.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, My name is</h5>
        <h1>Elvis Njoku</h1>
        <h5 className="text-light">Fullstact Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Official1} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header
