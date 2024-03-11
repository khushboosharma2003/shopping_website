import React from 'react'
import Footer from './Footer'
export default function Contact() {
  return (
  
      <div className="contact_me">

        <div className="box">
          <h1>Contact Me</h1>
          <div class="contact_parts">

            <div className="left">

              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRef2RJEolGYwVjMDpqxL-Ps-o-S32g9UyAaQ&usqp=CAU" alt="" /> */}
              <div className="skill-box">
                <h4> <i class='bx bxs-phone' ></i>phone number</h4>
                <h5>+91 8222872510</h5>
              </div>
              <div className="skill-box">
                <h4> <i class='bx bxl-gmail'></i>email</h4>
                <h5>khushboo.261203@gmail.com</h5>
              </div>
              <div className="skill-box">
                <h4>  <i class='bx bxl-linkedin'></i>linkedin</h4>
                <h5>khushboo-sharma-522219242</h5>
              </div>
              <div className="skill-box">
                <h4>  <i class='bx bxl-github link'></i>Git Hub</h4>
                <h5>khushboosharma2003</h5>
              </div>
              <div className="skill-box">

                <h4>  <i class='bx bxl-instagram'></i>Instagram</h4>
                <h5>khushboo.sharma_26</h5>
              </div>
              <div className="skill-box">
                <h4>  <i class='bx bxl-facebook link'></i>Facebook</h4>
                <h5>khushboo sharma</h5>
              </div>
            </div>
            <div className="contact">
              <h5>Ask me a question</h5>
              {/* <h2>CONTACT ME</h2> */}
              <form   action="">
                <input type="text" name='name'   placeholder='Your Name' required /> <br />
                <input type="text" name='email'  placeholder='Your Email' required /> <br />
                <input type="text" name='address'  placeholder='Your Address' /> <br />
                <input type="text" name='number'   placeholder='Your Number' /> <br />
                <textarea name='msg' id="" cols="100" rows="5" placeholder='Write something' required></textarea> <br />
                <button className='btn'>SUBMIT</button>
              </form>

            </div>
          </div>
        </div>
        <Footer/>
      </div>
      )
}
