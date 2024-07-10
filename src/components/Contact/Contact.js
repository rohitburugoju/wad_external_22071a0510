import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required /><br></br><br></br>
        <input type="email" placeholder="Email" required /><br></br><br></br>
        <textarea placeholder="Message" required></textarea><br></br><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
