import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, handleClick }) => {
  const { title, price, image } = item;
const navigate=useNavigate();
  return (
    <div>
      <div className="itm-box" style={{ marginBottom: '3rem' }}>
        <img
          src={
            image
              ? image
              : 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/f/tr:w-270,/af9a714MSADAXX00003430_1.jpg?rnd=20200526195200'
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="describe">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">PRICE: ${price ? price : 'LOADING......'}</p>
            <div className="dis">{Math.floor(Math.random() * 21) + 10}% off/- </div>
          </div>
          <button onClick={() =>{ handleClick(item); navigate(`/wishlist`);}} className="add-to-cart-button">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
