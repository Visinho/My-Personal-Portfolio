import React from 'react';
import "./contact.css";
import {AiTwotoneMail} from "react-icons/ai";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className="contact__options">
            <article className="contact__option">
              <AiTwotoneMail />
               <h4>Email</h4>
               <h5>Elvisvisinho97@gmail.com</h5>
               <a href='mailto:elvisvisinho97@gmail.com' target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <BsMessenger />
               <h4>Facebook Messenger</h4>
               <h5>Elvis Visinho</h5>
               <a href='https://www.facebook.com/messages/t/elvis.visinho ' target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <IoLogoWhatsapp />
               <h4>Whatsapp</h4>
               <h5>+2348109502410</h5>
               <a href='https://api.whatsapp.com/send?phone=+2348109502410' target='_blank'>Send a message</a>
            </article>
          </div>

          <form action=''></form>
        </div>
    </section>
  )
}

export default Contact
