import React from 'react'
import Footer from "./Footer.js";
export default function Home() {
  return (
    <div>
      <display>
        <div className="img">
          <h2>
            SUPER DEALS
            <br/>
            <span>on all products</span>
            <div className="block">
              <h3>GET UPTO 70 % OFF</h3>
            </div>
          </h2>
        </div>
        <section id="feature">
          <div className="f_box">
            <img src="https://pngimg.com/uploads/free_shipping/free_shipping_PNG2.png" alt=""/>
            <h6>FREE SHIPPING</h6>
    
          </div>
          <div className="f_box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYdtOvuKGN2LLYWOlE9PW1svopu78OUmxhQ&usqp=CAU" alt=""/>
            <h6>SAVES TIME </h6>
    
          </div>
          <div className="f_box">
            <img src="https://blog.resellerclub.com/wp-content/uploads/2015/07/1.png" alt=""/>
            <h6>PROMOTION</h6>
    
          </div>
          <div className="f_box">
            <img src="https://m.media-amazon.com/images/I/71gJ3wNPFTL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            <h6>HAPPY SELL</h6>
    
          </div>
          <div className="f_box">
            <img src="https://img.freepik.com/free-vector/24-hour-everyday-open-service-concept-background_1017-42466.jpg?w=2000" alt=""/>
            <h6>24*7 SUPPORT</h6>
    
          </div>
          <div className="f_box">
            <img src="https://png.pngtree.com/png-vector/20200922/ourmid/pngtree-gradual-24-hour-delivery-service-png-image_2347310.jpg" alt=""/>
            <h6>ONLINE SERVICE</h6>
    
          </div>
        </section>
      </display>
    
      <div class="categories">
   <h1> TOP CATEGORIES</h1>
        <div class="cat_boxes">
          <div class="box1 box">
            <a href="https://www.shopsy.in/reseller-women-clp-store">
            <img src="https://img.freepik.com/premium-photo/clothing-store-women-s-clothing-store-display_1417-16905.jpg" alt=""/>
            <h4> Women's Store</h4> </a>
          </div>
          <div class="box1 box ">
            <a href="https://www.shopsy.in/reseller-mens-store?utm_medium=WA&utm_campaign=WA_100025&cmpid=WA_100025">
            <img src="https://t3.ftcdn.net/jpg/06/14/48/42/360_F_614484207_4QdrmTkZWKOzKYpARM0zxfLsTUyaQ8BG.jpg" alt=""/>
            <h4>Men's Store</h4>
          </a>
          </div>
          <div class="box1 box">
            <a href="https://www.shopsy.in/kids-clothing/girls-wear/combo-sets/pr?sid=2oq,mpf,acr,tro">
            <img src="https://images.indianexpress.com/2018/10/1-shopping-dreamstime.jpg" alt=""/>
            <h4>Kid's Store</h4>
          </a>
          </div>
          <div class="box1 box">
            <a href="https://www.flipkart.com/footwear/pr?sid=osp">
            <img src="https://thumbs.dreamstime.com/b/shoe-store-view-inside-new-models-season-58179612.jpg" alt=""/>
            <h4>Footwears</h4>
          </a>
          </div>
          <div class="box1 box">
            <a href="https://www.amazon.in/electronics/b?ie=UTF8&node=976419031">
            <img src="https://media.istockphoto.com/id/1163521306/photo/woman-buys-the-tv.jpg?s=612x612&w=0&k=20&c=hjcTd_I4mxAyF_jHVkJrQt1gIsw_1NmNVC19Ob3PuTs=" alt=""/>
            <h4>Electronics</h4>
          </a>
          </div>
          <div class="box1 box">
            <a href="https://www.amazon.in/Fashion-Jewellery/b?ie=UTF8&node=5210079031">
            <img src="https://media.istockphoto.com/id/155013169/photo/jewelry-on-window-display.jpg?s=612x612&w=0&k=20&c=HJOD1gPfNRlDfewJH89BmtvwKU2soa0I1YBxzqaNO8M=" alt=""/>
            <h4>Jewellery</h4>
          </a>
          </div>
        </div>
      </div>
      {<Footer/>}
    </div>
  )
}
