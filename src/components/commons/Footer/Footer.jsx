import React from "react";
import {GiCutDiamond} from "react-icons/gi";
import { MdLocationPin, MdPhone, MdEmail} from "react-icons/md";
import './Footer.css'
import img from './logo.png'



const Footer = () => {
  return (
    <div className="container p-0 bgFooter">
      <div className="row">
        <div className="col-md-6 col-lg-3 col-sm-12">
          <img src={img} alt="company-logo" className="company-logo"/>
          <h2 className="footer-company-header">ALYAZYEH PEARLS</h2> 
          <p className="footer-company-content">
            Alyazyeh Pearls is a company dedicated to the exercise of
            Prospecting,Recognition, Exploration, Lapidation and Marketing of
            diamonds.
          </p>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12">
              <h2 className='footer-content-heading'>Quick Links</h2>
              <div className="footer-icon-div"><GiCutDiamond className='footer-icons'/><a href='/Jewellery'>Diamond Types</a></div>
              <div className="footer-icon-div"><GiCutDiamond className='footer-icons'/><a href='/Jewellery'>Jewellery</a></div>
              <div className="footer-icon-div"><GiCutDiamond className='footer-icons'/><a href='/gallery'>Gallery</a></div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12">
                <h2 className='footer-content-heading'>Our Services</h2>
                <div className="footer-icon-div"><GiCutDiamond className='footer-icons'/><a href='/services'>Cutting & Polishing</a></div>
                <div className="footer-icon-div"><GiCutDiamond className='footer-icons'/><a href='/services'>Designing</a></div>
                <div className="footer-icon-div"><GiCutDiamond className='footer-icons'/><a href='/services'>Manufacturing</a></div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12">
                <h2 className='footer-content-heading'>Contact Us</h2>
                <address className="footer-icon-div"><MdLocationPin className='footer-icons address-icon'/><a href='#'>Office G/05, Owned by FAHAD AHMAD ABDULKARIM ALZAROUNI, Hor Al Anz</a></address>
                <div className="footer-icon-div"><MdPhone className='footer-icons'/><a href='#'>+971 544444210</a></div>
                <div className="footer-icon-div"><MdEmail className='footer-icons'/><a href='#'> <br></br>info@AlyazyehPearls.com</a></div>
        </div>
      </div>
      <div className='col-12 footer-copyright'>
        <small> Copyright &copy; ALYAZYEH FOR PEARLS & PRECIOUS STONES TRADING CO. L.L.C</small>
      </div>
    </div>
  );
};

export default Footer;
