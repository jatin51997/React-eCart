import React, { useState ,useEffect} from 'react'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar({cart,handleShow}) {
 
   return (
        <div className='flex shopping-card'>
         <div onClick={()=>handleShow(false)} className="e-cart">E-cart App</div>
         <div id="addedItem">Item is added!!!</div>
         <div onClick={()=>handleShow(true)} className="cart">Cart 
            <sup>{cart.length
            }</sup>
        </div>
        </div>
    )
}

export default Navbar