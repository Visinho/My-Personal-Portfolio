import React from 'react';
import "./testimonials.css";
import LG from "../../assets/LG.jpeg";
import Chichostic from "../../assets/Chichostic.jpeg";
import Oyoski from "../../assets/Oyoski.jpeg";
import Smiggay from "../../assets/Smiggay.jpeg";
import Ify from "../../assets/Ify.jpeg";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={LG} alt='Avatar1' />
            <h5 className='client__name'>Chief Medical Doctor, LifeCrest Hospital</h5>
            <small className='client__review'>We are going to have a client__review</small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={LG} alt='Avatar1' />
            <h5 className='client__name'>Chief Medical Doctor, LifeCrest Hospital</h5>
            <small className='client__review'>We are going to have a client__review</small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={LG} alt='Avatar1' />
            <h5 className='client__name'>Chief Medical Doctor, LifeCrest Hospital</h5>
            <small className='client__review'>We are going to have a client__review</small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={LG} alt='Avatar1' />
            <h5 className='client__name'>Chief Medical Doctor, LifeCrest Hospital</h5>
            <small className='client__review'>We are going to have a client__review</small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
