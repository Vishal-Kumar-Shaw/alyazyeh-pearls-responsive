import React from 'react'
import './Details.css'

const Details = (props) => {
  return (
    <div className='container bg-details-div'>
        <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12'>
                <img src={props.image} alt="img" className='details-img'/>
            </div>
        </div>

    </div>
  )
}

export default Details