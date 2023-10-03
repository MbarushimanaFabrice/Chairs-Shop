import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Product3() {
const thirdnavigate=useNavigate()
  return (
	  <>
		  <div className="product">
			  <div className="prolist">
				  <button onClick={()=>thirdnavigate(-1)}>Back</button>
				  <div className="prodesciption">
					  <h3>Detailes</h3>
					  <p> <strong>Product Name: </strong><span> Lorem, ipsum dolor.</span> </p>
					  <p> <strong>Made From: </strong><span> Lorem, ipsum dolor.</span> </p>
					  <p> <strong>Paires:</strong><span> 25</span> </p>
					  <p> <strong>Price:</strong><span> 40$</span> </p>
					  <input type="number" />
					  <button>Add to cart</button>
				  </div>
				  <div className="prolists">
					  <div className="imgs">
						  <img src="third/11.webp" alt="" />
					  </div>
					  <div className="imgs">
						  <img  src="third/25.jpg" alt="" />
					  </div>
				  </div>
			  </div>
			  <div className="fullpro">
				  <img src="third/25.jpg" alt="" />
				  
			  </div>
		  </div>
     </>
  
  )
}
