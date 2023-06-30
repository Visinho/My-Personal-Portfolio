import React from 'react';
import "./header.css";
import CTA from './CTA';
import ImageVisinho from "../../assets/ImageVisinho.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, My name is</h5>
        <h1>Elvis Njoku</h1>
        <h5 className="text-light">Fullstack Javascript Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ImageVisinho} alt='me' className='styling'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header
