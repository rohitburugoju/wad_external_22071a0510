import React, { useState } from 'react';
import './Catalog.css';

function Catalog({ addToCart }) {
  const items = [
    { id: 1, name: 'Item 1', price: 100, 
      imageUrl: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/1:1/w_1800,h_1800,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg'
      },
    { id: 2, name: 'Item 2', price: 200, 
      imageUrl: 'https://media.wired.com/photos/643d7e61cdba28f045ac3f59/4:3/w_2136,h_1602,c_limit/macbook_sec_GettyImages-1368668740.jpg' 

    },
    { id: 3, name: 'Item 3', price: 300, 
      imageUrl: 'https://media.wired.com/photos/63728604691ed08cc4b98976/16:9/w_2095,h_1178,c_limit/Nike-Swoosh-News-Gear.jpg'
       },
  ];

  return (
    <div className="Catalog">
      <h2>Catalog</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            { <img src={item.imageUrl} alt={item.name} /> }
            {item.name} - {item.price}/-
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
