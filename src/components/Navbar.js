import React, { useEffect, useRef } from 'react'
import '../styles/navbar.scss'
import { FaDownload } from 'react-icons/fa'

const Navbar = () => {

   
  return (
    <div className='navbar-main-container'>
        <nav className='navbar-sub-container'>
        <ul className="nav-list">
          <li><a href="#" >Updates</a></li>
          <li><a href="#">Yours</a></li>
          <li><a href="#">Safe</a></li>
          <li><a href="#">Fast</a></li>
          <li><a href="#">By Google</a></li>
          <li><a className="download-btn" href="#"><FaDownload /> Donwload</a></li>
         
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
