import React from 'react';
import "./about.css";
import abujaSpace from "../../assets/abujaSpace.jpeg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
   <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={abujaSpace} alt='abujaSpace' />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ years Working Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          
          <p>
            As a full-stack JavaScript developer, I have the expertise to handle both front-end and back-end development using the JavaScript programming language. On the front-end, I am skilled in HTML, CSS, and JavaScript, allowing me to create dynamic and responsive user interfaces. With proficiency in the React framework, I can develop interactive web pages with ease.
            When it comes to the back-end, I excel in server-side programming using frameworks like Node.js/Nest.js. I am experienced in designing and optimizing databases using MongoDB, MySQL, or PostgreSQL. Leveraging my knowledge of RESTful APIs, I can seamlessly connect the front-end and back-end components of an application.
            I am well-versed in version control systems like Git, which enables me to collaborate efficiently with other developers. Additionally, I am familiar with deployment strategies and cloud platforms like AWS and Heroku, ensuring smooth deployment and scalability of applications.
            Being a full-stack JavaScript developer empowers me to work on diverse layers of an application, providing end-to-end solutions with proficiency and effectiveness.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

   </section>
  )
}

export default About
