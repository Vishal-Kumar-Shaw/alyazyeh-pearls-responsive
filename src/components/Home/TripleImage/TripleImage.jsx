import React from 'react'
import './TripleImage.css'
const TripleImage = (props) => {
  return (
    <div className='container bg-home-image-container'>
        <div className='row'>
            <div className='col-lg-4 col-sm-12 child-img m-0 p-0'>
                <img src={props.image1} alt="img1" className='child-img'/>
            </div>
            <div className='col-lg-4 col-sm-12 child-img m-0 p-0'>
                <img src={props.image2} alt="img1" className='child-img'/>
            </div>
            <div className='col-lg-4 col-sm-12 child-img m-0 p-0'>
                <img src={props.image3} alt="img1" className='child-img'/>
            </div>
        </div>
    </div>
  )
}

export default TripleImage