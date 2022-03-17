import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {
  const { numOrWord } = useParams();

  return (
    isNaN(numOrWord) ? <h1>This is the word: {numOrWord}</h1> : <h1>This is the number: {numOrWord}</h1>
  )
}

export default Number