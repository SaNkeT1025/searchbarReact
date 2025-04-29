import React from 'react'
import Card from './Card';
import './ProductList.css'

function ProductList({data}) {
  return (
    <div className='products'>
        {data?.recipes?.map((recipe)=>{
            return(<li key={recipe.id}>
                <Card recipe={recipe}/>
            </li>)
             
        })}
    </div>
  )
}

export default ProductList