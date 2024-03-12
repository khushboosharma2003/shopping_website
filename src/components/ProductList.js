import React, { useState, useEffect } from 'react';
import Item from './Item';
import Footer from './Footer';

export default function ProductList({ handleClick, type }) {
  const [itm, setItm] = useState([]);
  const [search, setSearch] = useState('');

  const update = async () => {
    try {
      let url = 'https://fakestoreapi.com/products';
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      let parsedData = await data.json();
      setItm(parsedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    update();
  }, []);

  useEffect(() => {
    // Whenever the 'type' prop changes, set the search term to the new 'type'
    setSearch(type);
    searchStart();
  }, [type]);

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchStart();
    }
  };

  const searchStart = async () => {
    try {
      let url = `https://fakestoreapi.com/products/category/${search}`;
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      let parsedData = await data.json();
      setItm(parsedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='backg'>
      <h1>LATEST ARRIVALS</h1>
      <hr />
      <div className='search-container'>
        <input
          type='text'
          className='search-box'
          placeholder='Enter Item..'
          onKeyDown={handleKey}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button onClick={searchStart} className='search-button'>
          Search
        </button>
      </div>
      <div className='container'>
        {itm.map((element) => (
          <div className='card ' key={element.id}>
            <Item item={element} handleClick={handleClick} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

//              electronics"
//             "jewelery",
//             "men's clothing",
            // "women's clothing