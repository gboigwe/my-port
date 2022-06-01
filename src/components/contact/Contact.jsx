import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9fbcvl', 'template_8jjkzdl', form.current, 'Vs7k7QR0zkm_tWTRE')
      
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className='con__option'>
          <article className='contact__option'>
            <MdOutlineEmail className='con__opt-icon' />
            <h3>Email</h3>
            <h5>contact@gmail.com</h5>
            <a href='mailto:geakande@gmail.com' target="_blank"  rel='noopener noreferrer' >Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='con__opt-icon' />
            <h3>Messenger</h3>
            <h5>gboigwe</h5>
            <a href='https://m.me/gboigwe' target="_blank"  rel='noopener noreferrer' >Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='con__opt-icon' />
            <h3>WhatsApp</h3>
            <h5>+234 8068 711 642</h5>
            <a href='https://api.whatsapp.com/send?phone=+2348068711642' target="_blank" rel='noopener noreferrer' >Send a message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="msgArea" id="msg" row="7" placeholder='Your Message' required ></textarea>
          <input type="submit" value="Send Message" className='btn btn-primary' />
        </form>
      </div>
    </section>
  )
}

export default Contact