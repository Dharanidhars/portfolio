import React from 'react'
import './Intro.css'
import bg from '../../assets/bg.png'
import resume from '../../assets/Resume.pdf'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm 
                <span className="introName"> Dharanidhar</span> <br /> Website Designer
            </span>
            <p className="introPara">
                I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.
            </p>
           
                <a href={resume} download='Dharanidhar_Resume.pdf' >
                    <button className="btn"> Download CV </button>
                </a>
           
        </div>
        <img src={bg} alt="profile" className="bg" />

    </section>
)
}

export default Intro