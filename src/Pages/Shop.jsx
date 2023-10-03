import React from 'react'
import {  } from 'react-icons/ai'
import { } from 'react-icons/bi'
import { GiShoppingCart } from 'react-icons/gi'
import { BsFillStarFill,BsStarHalf } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
 
export default function Shop() {
	const navigate = useNavigate()
	const secondnav = useNavigate()
	const thirdnav = useNavigate()
	const sixthnav = useNavigate()

	return (
		<>
			<div className="shop_container" id='shoping'>
				<div className="shop">
					<h4><span>NEW ARRIVAL</span></h4>
					<h2>Shop Now</h2>

{/*======================== row one ================================ */}

					<div className="myproducts">
						{/* prod 1 */}

						<div className="products">
							<img src="images/13.jpg" alt="" />
							
							<div className="chair_typ">
								<p>Type of chair</p>
							</div>
							<div className="str">
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsStarHalf className='star' /><br />
								<GiShoppingCart className='cart' />
								
							</div>
							<div className="btn">
                 		<button onClick={()=>navigate('product1')}>View more</button>
							</div>
							<p><span>26$</span></p>
						</div>
						{/* prod 1 */}
						<div className="products">
							<img src="images/31.png" alt="" />
							
							<div className="chair_typ">
								<p>Type of chair</p>
							</div>
							<div className="str">
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsStarHalf className='star' /><br />
							<GiShoppingCart className='cart'/>
							</div>
							<div className="btn">
                 		<button onClick={()=>secondnav('product2')}>View more</button>
							</div>
							<p><span>26$</span></p>
						</div>

						{/* prod 1 */}
						<div className="products">
							<img src="images/2.jpg" alt="" />
							
							<div className="chair_typ">
								<p>Type of chair</p>
							</div>
							<div className="str">
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsStarHalf className='star' /><br />
							<GiShoppingCart className='cart'/>
							</div>
							<div className="btn">
                 		<button onClick={()=>thirdnav('product3')}>View more</button>
							</div>
							<p><span>26$</span></p>
						</div>


					</div>

{/*======================== END  row one ================================ */}
                  <div className="myproducts">
						{/* prod 1 */}

						<div className="products">
							<img src="images/3.jpg" alt="" />
							
							<div className="chair_typ">
								<p>Type of chair</p>
							</div>
							<div className="str">
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsStarHalf className='star' /><br />
							<GiShoppingCart className='cart'/>
							</div>
							<div className="btn">
                 		<button><a href="#">View more</a></button>
							</div>
							<p><span>26$</span></p>
						</div>

						{/* prod 1 */}
						<div className="products">
							<img src="images/4.jpg" alt="" />
							
							<div className="chair_typ">
								<p>Type of chair</p>
							</div>
							<div className="str">
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsStarHalf className='star' /><br />
							<GiShoppingCart className='cart'/>
							</div>
							<div className="btn">
                 		<button><a href="#">View more</a></button>
							</div>
							<p><span>26$</span></p>
						</div>

						{/* prod 1 */}
						<div className="products">
							<img src="images/17.jpg" alt="" />
							
							<div className="chair_typ">
								<p>Type of chair</p>
							</div>
							<div className="str">
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsFillStarFill className='star'/>
							<BsStarHalf className='star' /><br />
							<GiShoppingCart className='cart'/>
							</div>
							<div className="btn">
                 		<button onClick={()=>sixthnav('product6')}>View more</button>
							</div>
							<p><span>26$</span></p>
						</div>


					</div>

{/*========================   row two ================================ */}
				</div>
			</div>

		</>
	)
}






// https://thepiratebay.org/index.html
// https://www.1377x.to/torrent/4265604/FreeCourseWeb-Udemy-React-Native-Mobile-App-design-code-and-publish/