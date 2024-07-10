import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    dob: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required /><br></br>
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required /><br></br>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br></br>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br></br>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required /><br></br>
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required /><br></br>
        <input type="text" name="city" placeholder="City" onChange={handleChange} required /><br></br>
        <input type="text" name="state" placeholder="State" onChange={handleChange} required /><br></br>
        <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} required /><br></br>
        <input type="text" name="country" placeholder="Country" onChange={handleChange} required /><br></br>
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required /><br></br>
        <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required /><br></br><br></br>
        <button type="submit">Register</button><br></br>
      </form>
    </div>
  );
}

export default Register;
