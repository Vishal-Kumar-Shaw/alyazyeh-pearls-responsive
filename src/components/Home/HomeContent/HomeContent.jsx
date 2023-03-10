import React from 'react'
import './HomeContent.css'

const HomeContent = (props) => {
  return (
    <div className='container bg-homecontent'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <h2>{props.heading}</h2>
                <p>{props.content}</p>
                <br/><br/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-0 m-0'>
                <img src={props.image} alt="Image" className="home-content-image"/>
            </div>
        </div>
    </div>
  )
}

export default HomeContent