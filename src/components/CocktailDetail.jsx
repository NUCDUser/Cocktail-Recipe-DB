import React from 'react'
import { useParams } from 'react-router-dom'

const CocktailDetail = () => {
  const { id } = useParams()
  return (
    <div>CocktailDetail</div>
  )
}

export default CocktailDetail