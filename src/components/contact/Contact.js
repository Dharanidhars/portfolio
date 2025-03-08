import React, { useRef } from 'react'
import './Contact.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import bootstrap from '../../assets/bootstrap.png'
import git from '../../assets/git.png'
import github from '../../assets/github1.png'
import react from '../../assets/react.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zc224pj', 'template_ccloadl', form.current, {
        publicKey: 'y05EaNDlGvaWhgslB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert("Email Sent !")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage">
        <div id="language">
            <h1 className="contactPageTitle">My Skills</h1>
            <p className="skillsDesc">I have a strong foundation in front-end development, specializing in creating responsive and interactive web applications. My expertise includes HTML, CSS, and JavaScript, along with modern frameworks like React. I also have experience with state management using Redux and styling libraries like Bootstrap and Tailwind CSS. I am proficient in vesion control using Git & GitHub and always strive to improve my skills by learning the latest technologies and best practices in web development.</p>
            <div className="skillsImgs">
                <img src={html} alt="skills" className="skillImg" />
                <img src={css} alt="skills" className="skillImg" />
                <img src={javascript} alt="skills" className="skillImg" />
                <img src={bootstrap} alt="skills" className="skillImg" />
                <img src={git} alt="skills" className="skillImg" />
                <img src={github} alt="skills" className="skillImg github"  />
                <img src={react} alt="skills" className="skillImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
              Please fill out the form below to discuss any work opportunities
            </span>
            <form  className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder='Your Name' className="name" name='from_name' />
              <input type="email" placeholder='Your Email' className="email" name='from_email' />
              <textarea name="message" rows='5' placeholder='Your Message' className='msg'></textarea>
              <button className="submitBtn" type='submit' value='send'>Submit</button>
              <div className="links">
                <a href="https://www.facebook.com/share/15mDEQxc1W/" target='_blank' rel="noopener noreferrer">
                  <img src={facebook} alt="facebook" className="link" />
                </a>
                <a href="https://www.instagram.com/dharanidhar__?igsh=MXJxb3Q0YmltMzkxaw==" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instagram" className="link" />
                </a>
                <a href="https://x.com/dharanidha31104?t=qrM5nLbwp7QvLLYN7cgzNg&s=08" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" className="link" />
                </a>
                <a href="https://www.linkedin.com/in/dharanidhar-s/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" className="link" />
                </a>
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact