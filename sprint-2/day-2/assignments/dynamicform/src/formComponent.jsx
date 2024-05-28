import React, { useRef, useState } from 'react';

const DynamicForm = () => {
  const inputRefs = useRef([]);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const addToRefs = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = '';
    if (name === 'username' && value.length < 3) {
      error = 'Username must be at least 3 characters long';
    }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Email is invalid';
    }

    setFormErrors({
      ...formErrors,
      [name]: error
    });
  };

  const handleFocus = (index) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Custom validation or processing can be added here
    if (Object.values(formErrors).every(error => error === '')) {
      console.log('Form data:', formData);
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors in the form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          ref={addToRefs}
          onChange={handleInputChange}
        />
        {formErrors.username && <span>{formErrors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          ref={addToRefs}
          onChange={handleInputChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <button type="button" onClick={() => handleFocus(0)}>Focus Username</button>
      <button type="button" onClick={() => handleFocus(1)}>Focus Email</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
