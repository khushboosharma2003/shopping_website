import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function About() {
  return (
    <div>

      <div className="ab-head text-center">
      <h1>ABOUT US</h1>
      </div>
      <div className="ab-body d-flex justify-content-cente">
        <div className="left">
<img src="https://66.media.tumblr.com/294387922b2b6d600b29688ab7f1ec90/tumblr_mfn6zo3Py71rj0tfwo2_500.gifv" alt="" />
        </div>
        <div className="right des">
            

Shopping With Shopy
Discover a virtual shopping paradise at our website. Browse through a vast collection of products from leading brands, spanning fashion, electronics, home decor, and more. Our user-friendly interface ensures effortless navigation, allowing you to swiftly add items to your cart. Enjoy a secure checkout process with multiple payment options. Stay updated with the latest trends through personalized recommendations and exclusive deals. Customer satisfaction is our priority, with efficient customer support ready to assist.Our website provides detailed product descriptions and customer reviews, aiding informed choices. Benefit from a responsive design, ensuring smooth browsing across devices. Sign up for newsletters to access early releases and promotions. Elevate your lifestyle effortlessly with our one-stop shopping destination, where every click unveils new possibilities and shopping desires come to life.
        </div>

        
      </div>
      {/* <Gallery/> */}
      {<Footer/>}
  
    </div>
  )
}
