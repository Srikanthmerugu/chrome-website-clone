import React, { useEffect, useRef } from 'react'
import '../styles/navbar.scss'
import { FaDownload } from 'react-icons/fa'

const Navbar = () => {

   
  return (
    <div className='navbar-main-container'>
        <nav className='navbar-sub-container'>
        <ul className="nav-list">
          <li><a href="#update" >Updates</a></li>
          <li><a href="#safe">Safe</a></li>
          {/* <li><a href="#yours">Yours</a></li> */}
          
          <li><a href="#built">By Google</a></li>
          <li><a href="#built-two">Fast</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li></li>
          <button className="download-btn" href="#"><FaDownload /> Donwload</button>
         
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
