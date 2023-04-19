import React from 'react'
import './card.css';

const Card = (props) => {
  return (
    <div className="card">
    <img className="product--image" src={props.url} alt="product image" />
    <h2>{props.name}</h2>
    <p className="price">{props.price}</p>
    <p>{props.description}</p>
    <p>
      <button>Add to Cart</button>
    </p>
  </div>
  )
}

export default Card