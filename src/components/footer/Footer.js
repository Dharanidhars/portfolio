import React from 'react'
import './Footer.css'

const Footer = () => {
    const date = new Date()
  return (
    <footer className='footer'>
        Copyright &copy; {date.getFullYear()} Dharanidhar. All right received. 
    </footer>
  )
}

export default Footer