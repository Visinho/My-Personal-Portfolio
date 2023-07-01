import React from 'react';
import "./services.css";
import {BsFillEnvelopeCheckFill} from "react-icons/bs";

const Services = () => {
  return (
   <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Design and Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Deployment</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Figma Design</p>
            </li>
          </ul>
        </article>
      </div>
   </section>
  )
}

export default Services
