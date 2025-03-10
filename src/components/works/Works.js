import React from 'react'
import './Works.css'
// import link from '../../assets/link.png'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
// import portfolio4 from '../../assets/portfolio4.jpg'
// import portfolio5 from '../../assets/portfolio5.jpg'
// import portfolio6 from '../../assets/portfolio6.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";


const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>
        <div className='portfolio'>
          <div className="worksImgs">
              <img src={portfolio1} alt="portfolio1" className="worksImg" />
              <div className="layer">
                <h3>E-commerce</h3>
                <p>DD Shopping offers a smooth and user-friendly online shopping experience. Browse products, and them to your cart, and complete your purchase easily.</p>
                <a href="https://ddshopper.netlify.app" target='_blank' rel='noopener noreferrer' ><FaExternalLinkAlt /></a>
              </div>
          </div>
          <div className="worksImgs">
              <img src={portfolio2} alt="portfolio2" className="worksImg" />
              <div className="layer">
                <h3>TO DO APP</h3>
                <p>A responsive To-Do app built with React for managing tasks efficiently. It allows users to add, edit, delete, and mark tasks as complete. Data is saved using local storage, ensuring persistence.</p>
                <a href="https://dharanidhars-todo-app.netlify.app/" target='_blank' rel='noopener noreferrer' ><FaExternalLinkAlt /></a>
              </div>
          </div>
          <div className="worksImgs">
              <img src={portfolio3} alt="portfolio3" className="worksImg" />
              <div className="layer">
                <h3>Weather App</h3>
                <p>The Weather App is a React-based tool that shows real-time temperature, humidity, and conditions for any city using a weather API. It features a clean and responsive design.</p>
                <a href="https://dharanidhars-weather-app.netlify.app/" target='_blank' rel='noopener noreferrer' ><FaExternalLinkAlt /></a>
              </div>
          </div>

              {/* <img src={portfolio1} alt="portfolio1" className="worksImg" /> */}
              {/* <img src={portfolio2} alt="portfolio2" className="worksImg" /> */}
              {/* <img src={portfolio3} alt="portfolio3" className="worksImg" /> */}
              {/* <img src={portfolio4} alt="portfolio4" className="worksImg" /> */}
              {/* <img src={portfolio5} alt="portfolio5" className="worksImg" /> */}
              {/* <img src={portfolio6} alt="portfolio6" className="worksImg" /> */}
              

        </div>
        
        {/* <button className="worksBtn">See More</button> */}

    </section>
  )
}

export default Works