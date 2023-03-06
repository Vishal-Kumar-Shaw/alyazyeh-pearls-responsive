import React from 'react'
import img1 from './Images/icons/integrity.png'
import img2 from './Images/icons/1212289.png'
import img3 from './Images/icons/professional.png'
import img4 from './Images/icons/sustain.png'
import img5 from './Images/icons/team.png'
import img6 from './Images/icons/trust.png'
import img7 from './Images/icons/leadership.png'
import img8 from './Images/icons/passion.png'
import './AboutIcons.css'

const AboutIcons = () => {
  return (
    <div className='main-content-about-img'>
        <div className='img-div'><img src={img1} alt="Integrity"/><h3>Integrity</h3></div>
        <div className='img-div'><img src={img2} alt="Integrity"/><h3>Quality</h3></div>
        <div className='img-div'><img src={img3} alt="Integrity"/><h3>professionalism</h3></div>
        <div className='img-div'><img src={img4} alt="Integrity"/><h3>Sustainability</h3></div>
        <div className='img-div'><img src={img5} alt="Integrity"/><h3>Team Work</h3></div>
        <div className='img-div'><img src={img6} alt="Integrity"/><h3>Trust</h3></div>
        <div className='img-div'><img src={img7} alt="Integrity"/><h3>Leadership</h3></div>
        <div className='img-div'><img src={img8} alt="Integrity"/><h3>Passion</h3></div>

    </div>
  )
}

export default AboutIcons