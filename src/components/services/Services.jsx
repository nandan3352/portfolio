import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I do</h5>
      <h2>Skills</h2>

      <div className="container services__container">
        {/* Python Developer */}
        <article className='service'>
          <div className="service__head">
            <h3>Programmer</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Structures and Algorithms</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C++</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Object-Oriented Programming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Operating Systems</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>System Design</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Responsive Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using Redux for React apps</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Connect with MongoDB </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrate 3rd party API's</p>
            </li>
           
          </ul>
        </article>

        {/* Java Developer */}
        <article className='service'>
          <div className="service__head">
            <h3>Other</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blockchain</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Yoga</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Badminton</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services