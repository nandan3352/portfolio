import React from 'react'
import './portfolio.css'
import IMG8 from '../../assets/Portfolio8.jpg'
import IMG2 from '../../assets/Portfolio2.jpg'
import IMG4 from '../../assets/Portfolio4.jpg'
import IMG7 from '../../assets/Portfolio7.jpg'
import IMG6 from '../../assets/Portfolio6.jpg'
import IMG3 from '../../assets/Portfolio3.jpg'

const data =[
  {
    id:1,
    image:IMG6,
    title:'TechWork',
    github: 'https://github.com/nandan3352/TechWork1',
    demo: 'https://techwork-e9fl.onrender.com/'
  },
  {
    id:2,
    image:IMG2,
    title:'Mernify',
    github:'https://github.com/nandan3352/notesApp',
    demo: 'https://nodesApp.onrender.com'
  },
  {
    id:3,
    image:IMG4,
    title:'Modern Notes',
    github: 'https://github.com/nandan3352/adv_notes',
    demo: 'https://nandan3352.github.io/adv_notes'
  },
  {
    id:4,
    image:IMG7,
    title:'CowBull Game',
    github: 'https://github.com/nandan3352/cowb_game',
    demo: 'https://nandan3352.github.io/cowb_game'
  },
  {
    id:5,
    image:IMG3,
    title:'Drawing',
    github: 'https://github.com/nandan3352/drawing-website',
    demo: 'https://nandan3352.github.io/drawing-website/6.html'
  },
  {
    id:6,
    image:IMG8,
    title:'Image Search',
    github: 'https://github.com/nandan3352/image-search-website',
    demo: 'https://nandan3352.github.io/image-search-website/'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map((props)=>{
            return(
              <article key={props.id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={props.image} alt={props.title} className="portfolio__item-img"/>
              </div>
              <h3>{props.title}</h3>
              <div className="portfolio__item-cta">
                <a href={props.github} className='btn' target='_blank' rel='noreferrer'>&lt;Code <span className='sml'>/</span>&gt;</a>
                <a href={props.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
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