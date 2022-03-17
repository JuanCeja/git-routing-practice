import React from 'react'
import { useParams } from 'react-router-dom'

const StyledWord = (props) => {

  const { word, color, backgroundColor } = useParams();

  return (
    <div>
      
      <h1 style={{
        backgroundColor: backgroundColor,
        color: color
      }}>
        The word is: {word}</h1>
    </div>

  )
}

export default StyledWord