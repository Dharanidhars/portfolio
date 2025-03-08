import React from 'react'
import './Skills.css'

import mobileappdesign from '../../assets/mobileappdesign.png'
import frontend from '../../assets/frontend.png'
import webdesign from '../../assets/webdesign.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">
          What I Do
        </span>
        <span className="skillDesc">
          I am a skilled and passionate web designer with experience in creating visuall appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript and React, as well as GitHub hosting.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={frontend} alt="Front-End" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Front-End Development</h2>
                <p>I build modern, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js, ensuring seamless perfomance and engaging user experience.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={webdesign} alt="Web Design" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Design</h2>
                <p>I create clean, modern, and responsive web designs that enhance user experience, ensuring accessibility and visual appeal across all devices.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={mobileappdesign} alt="Mobile App Design" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Applications</h2>
                <p>I build efficient and interactive web applications that deliver seamless perfomance, user-friendly interfaces, and responsive designs for smooth digital experience.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills