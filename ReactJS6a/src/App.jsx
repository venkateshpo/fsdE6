import React, { useState } from 'react';
import ProductCard from './Productcard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Props and State Example</h1>

      <ProductCard
        name="Laptop"
        price="50000"
        category="Electronics"
      />

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default App;