import React from 'react'
import './Navbar.css'
import img from './logo.png'
import { Component } from 'react';


class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <>
        <nav>
          <div>
          <img src={img} alt="company-logo" className="company-logo" />
          <h2 className="company-logo-heading">AlyazyehPearls</h2>
          </div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active":"#navbar"}>
            <li><a href="/Home">HOME</a></li>
            <li><a href="/About">ABOUT US</a></li>
            <li><a href="/services">OUR SERVICES</a></li>
            <li><a href="/Jewellery">JEWELLERY</a></li>
            <li><a href="/gallery">GALLERY</a></li>
            <li><a href="/Contact">CONTACT US</a></li>
          </ul>
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </nav></>
    )
  }
}

export default Navbar