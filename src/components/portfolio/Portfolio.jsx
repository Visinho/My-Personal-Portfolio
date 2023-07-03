import React from 'react';
import "./portfolio.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";

const Portfolio = () => {
  return (
  <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={photo1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/project" className='btn' target='_blank'>Project Name</a>
            <a href="https://github.com/project" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={photo1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/project" className='btn' target='_blank'>Project Name</a>
            <a href="https://github.com/project" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={photo1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/project" className='btn' target='_blank'>Project Name</a>
            <a href="https://github.com/project" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={photo1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/project" className='btn' target='_blank'>Project Name</a>
            <a href="https://github.com/project" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={photo1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/project" className='btn' target='_blank'>Project Name</a>
            <a href="https://github.com/project" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
  </section>
  )
}

export default Portfolio
