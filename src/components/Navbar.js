import React from 'react'
import {Link}  from "react-router-dom";;
export default function Navbar() {
  return (
    <div>
      <header>
        <a href="" id="logo"> <img src="https://thumbs.dreamstime.com/b/shopping-logo-letter-s-concept-204397380.jpg" alt=""/></a>
        <h1>SHOPY</h1>
        <div className="menu">
          <ul>
            <li><Link to="/shopping_website">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to ="/cart"><i className="far fa-bag-shopping"></i></Link></li>
            <li><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
          </ul>
        </div>
      </header>
    
    </div>
  )
}