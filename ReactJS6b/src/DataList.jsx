import React from 'react';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 50000,
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Mouse',
    price: 800,
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 1500,
    category: 'Accessories'
  }
];

function DataList() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default DataList;