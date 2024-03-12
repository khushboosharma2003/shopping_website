import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  let isPresent = false;

  const handleClick = (item) => {
    console.log('Item clicked:', item);
    // Implement your logic for adding item to cart
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      console.log('Item already in cart:', item);
      return;
    }
    // Add the item to the cart
    setCart([...cart, item]);
    console.log('Item added to cart:', item);
  }
  
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/shopping_website" element={<Home />} />
        <Route exact path="/products" element={<ProductList handleClick={handleClick} />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        {/* Pass cart and setCart to Cart component */}
        <Route exact path="/wishlist" element={<Cart cart={cart} setCart={setCart}  />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
