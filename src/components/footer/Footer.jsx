import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>Nandan</a>
      <ul className='permalinks'>
        <li><a href="# ">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com/nandan27072004" target='_blank' rel='noreferrer' ><FiInstagram /></a>
        <a href="https://github.com/nandan3352" target="_blank" rel='noreferrer' ><FaGithub /></a>
        
        <a href="https://github.com/nandan3352" target="_blank" rel='noreferrer' ><BsLinkedin /></a>
        
      </div>
    </footer>
  )
}

export default Footer
