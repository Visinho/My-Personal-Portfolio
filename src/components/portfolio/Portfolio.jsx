import React from 'react';
import "./portfolio.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";

const portfolio = [
  {
    id: 1,
    image: photo1,
    title: "Fitness App",
    github: "https://github.com/Visinho/Fitness-Typescript-App",
    demo: "https://fitness-typescript-gjh8lxn9c-visinho1.vercel.app/"
  },
  {
    id: 2,
    image: photo2,
    title: "Redux toolkit Shopping Cart",
    github: "https://github.com/Visinho/REDUX-TOOLKIT-APP",
    demo: "https://redux-toolkit-app-qhk9.vercel.app/"
  },
  {
    id: 3,
    image: photo3,
    title: "Context API Shopping Cart",
    github: "https://github.com/Visinho/Context-API-E-Commerce",
    demo: "https://context-api-e-commerce.vercel.app/"
  },
  {
    id: 4,
    image: photo4,
    title: "Nike Clone App",
    github: "https://github.com/Visinho/Redux-E-Commerce",
    demo: "https://front-end-e-commerce-omega.vercel.app/"
  },
  {
    id: 5,
    image: photo5,
    title: "Refine Dashboard",
    github: "https://github.com/Visinho/REFINE-CLIENT",
    demo: "https://visinho-dashboard.netlify.app/"
  }
]

const Portfolio = () => {
  return (
  <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolio.map(({id, image, title, github, demo}) => {
            return(
        <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Project Name</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
  </section>
  )
}

export default Portfolio
