import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    alert('Button Clicked!');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Hello, ${name}! Form submitted successfully.`);
  };

  return (
    <div>
      <h1>Event Handling Example</h1>

      {/* onClick Event */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <br />
      <br />

      {/* onChange and onSubmit Events */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default App;