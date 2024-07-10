import React from 'react';
import './Carts.css';

function Carts({ cart }) {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="Carts">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} -{item.price}/-
          </li>
        ))}
      </ul>
      <h3>Total Amount: {totalAmount}/-</h3>
    </div>
  );
}

export default Carts;
