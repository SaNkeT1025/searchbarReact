import React from 'react'
import './Card.css'

function Card({recipe}) {
  return (
    <div className='card'>
        <img loading='lazy' src={recipe.image} alt={'img'} className='recipeimg'/>
        <div className='titleDiv'>
        <h3 className='recipename'>{recipe.name}</h3>
        </div>
        <p className='recipecuisine'>{recipe.cuisine}</p>
    </div>
  )
}

export default Card