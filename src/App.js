import React, { useState,useEffect } from 'react';

function FullNameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    }
  };
  useEffect(() => {
    setFullName(fullName);
  },[fullName]);
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (firstName && lastName) { // Check if both fields are filled
      setFullName(`Full Name: ${firstName} ${lastName}`);
    } else {
      setFullName("");
      alert('Please enter both first and last name');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
        // required // Mark input as required
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
        //required // Mark input as required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    <div>{fullName}</div>
    </div>
  );
}

export default FullNameForm;
