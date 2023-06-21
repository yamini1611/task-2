import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cart')
      .then((response) => response.json())
      .then((data) => setCartItems(data));
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
