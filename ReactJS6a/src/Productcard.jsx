import React from 'react';

function ProductCard(props) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product Name: {props.name}</p>
      <p>Price: ₹{props.price}</p>
      <p>Category: {props.category}</p>
    </div>
  );
}

export default ProductCard;