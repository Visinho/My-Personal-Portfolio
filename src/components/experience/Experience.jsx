import React from 'react';
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
  <section id='experience'>
    <h5 className='marginPull'>My Core Competencies</h5>
    <h2 className='marginPush'>My Experience</h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap/Materialize</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Material UI/Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React/Next JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
        </div>
      </div>

      <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className="experience__content">
        <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>Node/Nest JS</h4>
                <small className='text-light'>Experienced</small>
             </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>MongoDB/REDIS</h4>
                <small className='text-light'>Experienced</small>
             </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL Databases</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Cloud Computing/DevOps</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Experience
