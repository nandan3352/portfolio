import React from 'react'
import './about.css'
import Myself from '../../assets/prfile1.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__myself">
          <div className="about__pic">
            <img src={Myself} alt="About Pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <p className='small'>1+ Years</p>
            </article>

            

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <p className='small'>15+ Completed</p>
            </article>
          </div>

          <p className='about__para'>
            I am a prefinal year student of IIT Dhanbad with a strong passion on competitive programming and full stack web development. I love solving real life problems by my problem-solving skills. I feel particularly comfortable working with the MERN Stack. I also have a deep interest in ML and Blockchain technology.
            <br /></p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About