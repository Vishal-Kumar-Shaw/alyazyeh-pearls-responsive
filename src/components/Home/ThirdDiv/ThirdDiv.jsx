import React from 'react'
import Title from '../../commons/Title/Title'
import './ThirdDiv.css'

const ThirdDiv = (props) => {
  return (
    <div>
        <Title title= {props.title} className='third-div-title'/>
        <div className='bg-third-div'>
            <p className='third-div-content'>{props.content}</p>
        </div>
    </div>
  )
}

export default ThirdDiv