import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/elvisinho/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/Visinho/' target='_blank'><FaGithub /></a>
      <a href='https://web.facebook.com/elvis.visinho' target='_blank'><BsFacebook /></a>
      <a href='https://twitter.com/visinho4ever' target='_blank'><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials
