import React from 'react'
import './styles.scss'
const ChoiceCard = ({ data }) => {
  return (
    <div className='card-container'>
      <div>
        {data.svgRender()}
      </div>
      <p>{data.title}</p>
    </div>
  )
}

export default ChoiceCard
