import React from 'react'
import {} from 'react-icons/ai'
import { BsArrowUpCircle } from 'react-icons/bs'
import { Link } from 'react-scroll'
export default function Contact() {
  return (
    <>
      <div className="contact" id='contact'>
        <h3>Contact us</h3>
        <p>For any Home materioal you want you can contact us  by<br /> write your message down here olso if you have any problem <br /> about our product you can contact us, we are interested to hear about your message.</p>
        <div className="messages">
         <input type="email" placeholder='Enter Your Email' />
             <textarea cols="8" rows="1" placeholder='Write Your Message '></textarea>
            <button>Send Message</button>
        </div>
        <div className="myarrow">
          {/* home */}
        <Link to='home' spy={true} smooth={true} duration={1000}><BsArrowUpCircle className='arrow_up'/></Link>
         
        </div>
      </div>
      
    </>
  )
}
