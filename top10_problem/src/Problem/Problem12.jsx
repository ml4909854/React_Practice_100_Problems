import React, { useState } from 'react';

const Problem12 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  function handleInput(e) {
    const { name, value } = e.target; // Get name and value from the input field
    setFormData({
      ...formData, // Spread the previous state
      [name]: value // Update the corresponding field in the state
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted successfully');
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name" // Use name instead of id
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInput}
        />
        <input
          type="text"
          name="email" // Use name instead of id
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Problem12;
