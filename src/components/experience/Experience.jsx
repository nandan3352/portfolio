import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const languages = [
  {
    lang: 'CodeChef',
    link:'https://www.codechef.com/users/pbmatrix'
  },
  {
    lang: 'Coding Ninjas',
    link:'https://www.codingninjas.com/studio/profile/94420bd7-b9c5-459b-8255-bf9abb425b30'
  },
  {
    lang: 'GeeksforGeeks',
    link:'https://auth.geeksforgeeks.org/user/nandan27f7c6'
  },
  {
    lang: 'LeetCode',
    link:'https://leetcode.com/nandan_3352/'
  }
];

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className="container experience__container">
      <div className="exp__lang">
        <div>
          <h3>Edfling | React.js Developer Intern</h3><span>June 2023 - August 2023</span></div>
<br/>
          Engaged in developing and enhancing features of web applications and gaining hands on experience in front end
development

<div className="portfolio__item-cta">
                 <a href='https://edfling-course-portal.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
                 
          
        </div>
        <div className="exp__webdev">
          <h3>Sports Programming</h3>
          <div className="exp__content">

            4 Star in CodeChef
            <a href="https://www.codechef.com/users/pbmatrix" target='_blank'>&lt; Profile<span className='sml'>/</span>&gt;</a>
           
           {/* <a href='https://www.codechef.com/users/pbmatrix' className='btn btn-primary btn-sm' target='_blank' rel='noreferrer'>&lt;Profile <span className='sml'>/</span>&gt;</a>
                */}
                {/* <br/> */}
            Champion in Coding Ninjas  
            <a href='https://www.codingninjas.com/studio/profile/94420bd7-b9c5-459b-8255-bf9abb425b30' target='_blank'>&lt; Profile<span className='sml'>/</span>&gt;</a>
{/*         
            <br/> */}
            Solved 250+ in GeeksforGeeks 
            <a href='https://auth.geeksforgeeks.org/user/nandan27f7c6' target='_blank'>&lt; Profile<span className='sml'>/</span>&gt;</a>
        
            {/* <br/> */}
            Solved 250+ in LeetCode 
            <a href='https://leetcode.com/nandan_3352/'target='_blank'>&lt; Profile<span className='sml'>/</span>&gt;</a>
{/*         
            <br/> */}
                  {/* {
              languages.map((props, index) => {
                return (
             <div>
                  <article key={index} className="exp__details">
                    <BsPatchCheckFill className='exp__details-icon' />
                    <div>
                      <h4>{props.lang}</h4>
                      <p className='text-light small'>{props.link}</p>
                    </div>
                 
                  </article>
               <br/>
            </div>
                )
              })
            } */}

          </div>
        </div>
   </div>
    </section>
  )
}
export default Experience