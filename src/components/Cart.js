import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Cart = ({ cart, setCart}) => {
  const navigate = useNavigate();


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  const handleChange = (item, d) => {
    setCart(prevCart => {
      const ind = prevCart.indexOf(item);
      const arr = [...prevCart];
    });
  };
  return (
    <div className="cartbg">
    <article>
       <h1>YOUR WISHLIST </h1>
      <hr />
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

    </article>
    </div>
  );
};

export default Cart;
