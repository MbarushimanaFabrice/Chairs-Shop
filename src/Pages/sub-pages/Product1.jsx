import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Product1() {
const navigate=useNavigate()
  return (
	  <>
		  <div className="product">
			  <div className="prolist">
				  <button onClick={()=>navigate(-1)}>Back</button>
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
						  <img src="first/chair1.jpg" alt="" />
					  </div>
					  <div className="imgs">
						  <img  src="first/chair3.jpg" alt="" />
					  </div>
				  </div>
			  </div>
			  <div className="fullpro">
				  <img src="first/chair4.jpg" alt="" />
				  
			  </div>
		  </div>
     </>
  
  )
}
