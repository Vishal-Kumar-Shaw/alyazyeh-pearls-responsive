import React from 'react'
import img from './images/img1.jpg'
import './Enquire.css'

const Enquire = () => {
  return (
    <div className='container p-0'>
        <div className='row'>
            <div className='col-lg-8 enquire-main-content'>
                <h1>AVAIL EXPERT GEMMOLOGICAL SERVICES FROM THE MULTINATIONAL TEAM</h1>
                <hr/>
                <p>
                AlyazyehPearls takes pride in having a multinational and experienced
                team of gemologists, graders, analysts, polishers, and craftsmen that
                are instilled with a passion to perform, and continue to pursue
                excellence every day.
                </p>
                <a href=' ' className="enquire-link m-0">Enquire Now</a>
            </div>
            <div className='col-lg-4 p-0'>
                <img src={img} className="img-enquire" alt="enquire-img"/>
            </div>
        </div>

    </div>
  )
}

export default Enquire