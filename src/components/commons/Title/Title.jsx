import React from 'react'
import './TItle.css'

const Title = (props) => {
  return (
    <div class="section-header text-center">
        <h2>{props.title}</h2>
    </div>
  )
}

export default Title