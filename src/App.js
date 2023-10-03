import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Container from './Container'
import Product1 from './Pages/sub-pages/Product1'
import Product2 from './Pages/sub-pages/Product2'
import Product3 from './Pages/sub-pages/Product3'
import Product6 from './Pages/sub-pages/Project6'

 
function App() {
  return (
    <>
      <Routes>
       
        <Route path="/" element={<Container />} />
        <Route path="product1" element={<Product1 />} />
        <Route path='product2' element={<Product2 />} />
        <Route path='product3' element={<Product3 />} />
        <Route path='product6' element={<Product6/>}  />
      </Routes>
      {/* <Product1/> */}
    </>
   )
 }
 export default App
