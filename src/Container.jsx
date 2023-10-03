import React from 'react'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Pertners from './Pages/Pertners'
import Contact from './Pages/Contact'
import Account from './Pages/Account'
import { Link } from 'react-scroll'
export default function Container() {
  return (
    <>
      <div className="navigation" id='home'>
        <ul>

          <li><h3>Goiko <span>Chair</span></h3></li>
          <div className='mylogo'>
            <li>
              <Link to='home' spy={true} smooth={true} duration={1500}>Home</Link>
            </li>
            <li>
              <Link to='shoping' spy={true} smooth={true} duration={1500}>Shop</Link>
            </li>
            <li>
              <Link to='about_us' spy={true} smooth={true} duration={1500}>About Us</Link>
            </li>
            <li>
              <Link to='pertainers' spy={true} smooth={true} duration={1500}>Partners</Link>
            </li>
            <li>
              <Link to='contact' spy={true} smooth={true} duration={1500}>Contact</Link>
            </li>
          </div>
        </ul>
      </div>
      
      <Home />
      <Shop />
      <About />
      <Pertners />
      <Contact />
      <Account />
    </>
  )
}
