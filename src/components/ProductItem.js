import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ProductItem({ ITEM, addToCart, handleShow3 }) {
    return (
        <div>
            <button onClick={() => handleShow3(false)}>BACK</button>
            <div className='product-item-outer'>
                <div className='product-item'>
                    <img src={ITEM.url} width='100%' />

                </div>
                <div className='product-item'>
                    <p>{ITEM.name}|{ITEM.category}</p>
                    <p>{ITEM.seller}</p>
                    <p>Rs.{ITEM.price}/-</p>
                    <p>{ITEM.desc}</p>
                    <button
                        onClick={() => addToCart(ITEM)}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem