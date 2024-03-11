import React, { useState, useEffect } from 'react';
import Item from './Item';
import Footer from './Footer';

export default function ProductList({ handleClick }) {
  const [itm, setItm] = useState([]);
  const [search, setSearch] = useState('');

  const update = async () => {
    let url = `https://fakestoreapi.com/products`;
    // let url='https://www2.hm.com/hmwebservices/service/products/plp/hm-india/Online/en?'
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setItm(parsedData);
  };

  useEffect(() => {
    update();
  }, []);

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchStart();
    }
  };

  const searchStart = async () => {
    let url = `https://fakestoreapi.com/products/category/${search}`;
    let data = await fetch(url);
    console.log(search);
    let parsedData = await data.json();
    console.log(parsedData);
    setItm(parsedData);
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
        {
        itm.map((element) => (
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