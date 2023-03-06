import React from 'react'
import HomeContent from '../Home/HomeContent/HomeContent'
import img1 from './Images/1.jpg';
import img2 from './Images/2.jfif';
import img3 from './Images/3.jpg';
import Title from "../commons/Title/Title";
import './About.css'
import AboutIcons from './AboutIcons'

const About = () => {
  return (
    <div >
      <Title title="About Us"/>
      <div className='container about-main-container'>
        <HomeContent className="about-home-bg" image={img1} heading="OUR VISION" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
        <HomeContent className="about-home-bg" image={img2} heading="OUR MISSION" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
        <HomeContent className="about-home-bg" image={img3} heading="OUR PHILOSOPHY" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
       
      </div>
      <Title title="Our Values"/>
      <AboutIcons/>

    </div>
  )
}

export default About