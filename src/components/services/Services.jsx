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
              <p>Web App development</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Web Development Support & Maintenance</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Web Hosting</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Web Optimization</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Web Product Design</p>
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
              <p>Web Preparation</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Web Testing</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Automated Web Deployment on different platforms</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Big data management</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>IoT integration</p>
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
              <p>Copy writing</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Graphic Design</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Marketing Services</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>Blog Writing</p>
            </li>
            <li>
              <BsFillEnvelopeCheckFill className='service__list-icon'/>
              <p>White Paper/eBook Creation</p>
            </li>
          </ul>
        </article>
      </div>
   </section>
  )
}

export default Services
