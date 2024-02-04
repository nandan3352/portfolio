import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [user, setUser] = useState({
    name: "", email: "", message: ""
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Contact Form Submitted", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setUser({
      name: "", email: "", message: ""
    });
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5 className='fixmail'>nandan27072004@gmail.com</h5>
            <a href="mailto:nandan27072004@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

        </div>
        <form className='cform' onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Your Name' required
            value={user.name}
            onChange={handleInputs}
            className='cinputs'
          />
          <input type="email" name='email' placeholder='Your Email' required
            value={user.email}
            onChange={handleInputs}
            className='cinputs'
          />
          <textarea name="message" rows="7" placeholder='Your Message' required
            value={user.message}
            onChange={handleInputs}
            className='cinputs'
          ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </section>
  )
}

export default Contact