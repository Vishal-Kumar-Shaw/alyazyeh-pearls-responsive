import React from 'react';
import {FaPhoneAlt,FaFacebookSquare,FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa";
import { MdEmail,MdLocationOn } from "react-icons/md";
   import './Contactus.css';
   export default function Contact() {
     return (
      <section className="footer_get_touch_outer">
        <div classNameName="container contact-us-bg">
          <div className="footer_get_touch_inner grid-70-30 row">
            <div className="colmun-70 get_form">
              <div className="get_form_inner">
                <div className="get_form_inner_text">
                  <h3>Get In Touch</h3>
                </div>
                <form action="#">
                  <div className="grid-50-50">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="tel" placeholder="Phone/Skype"/>
                  </div>
                  <div className="grid-full">
                    <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
                    <input type="submit" value="Submit"/>
                  </div>
                </form>
              </div>
            </div>

            <div className="form-body-contact colmun-30 get_say_form">
              <h5>Say Hi!</h5>
              <ul className="get_say_info_sec">
                <li>
                  <i className="email"><MdEmail/></i>
                  <a href="mailto:">info@AlyazyehPearls.com</a>
                </li>
                <li>
                  <i className="Phone"><FaPhoneAlt/></i>
                  <a href="tel:">+971 544444210</a>
                </li>
                <li>
                  <i className="address"><MdLocationOn/></i>
                  <a href="#">ALYAZYEH FOR PEARLS & PRECIOUS STONES TRADING CO. L.L.C,<br></br> Office G/05,Owned by FAHAD AHMAD ABDULKARIM ALZAROUNI,<br></br> Hor Al Anz</a> 
                </li>
              </ul>  
              <ul className="get_say_social-icn">
                <li><a href="https://www.facebook.com/login.php"><i className="facebook"><FaFacebookSquare/></i></a></li>
                <li><a href="https://twitter.com/"><i className="instagram"><FaInstagram/></i></a></li>
                <li><a href="https://twitter.com/i/flow/login"><i className="twitter"><FaTwitter/></i></a></li>
                <li><a href="https://www.linkedin.com/"><i className="linkedin"><FaLinkedin/></i></a></li>
              </ul>          
            </div>        
          </div>
        </div>
    </section>
  );
}