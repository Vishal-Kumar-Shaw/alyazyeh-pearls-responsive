import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container bgNav p-0'>
        <h2 className='logoNav'>Logo</h2>
        <nav className="navbar navbar-expand-sm navbarStyle" >
    
            <ul className="navbar-nav ml-auto fontStyle">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">
                    About Us
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/services">
                    Our Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/jewellery">
                    jewellery
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="gallery">
                    Gallery
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact">
                    Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar