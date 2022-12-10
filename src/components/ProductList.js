import React ,{useState,useEffect}from 'react'
import '../App.css';
import ProductItem from './ProductItem';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function ProductList({ product, addToCart}) {

    const [showProductItem,setShowProductItem]=useState(false);
    const[individualData,setIndividualData]=useState([]);

    const handleClick = (data, value) => {
        console.log(data, value);
        setShowProductItem(value);
        setIndividualData(data);
    }

    const handleShow3=(value)=>{
        setShowProductItem(value);
    }
   
    return (
        <div>
            {!showProductItem ?
            <div className='product-page'>
                {
                    
                    product.map((productItem, productIndex) => {
                        return (
                            <div>
                                <div className='product-item productList-item'>
                                    <img src={productItem.url} width='100%' onClick={() => handleClick(productItem, true)}  />
                                    <p>{productItem.name}|{productItem.category}</p>
                                    <p>{productItem.seller}</p>
                                    <p>{productItem.price}/-</p>
                                    <button
                                        onClick={() => addToCart(productItem)}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            :
         <ProductItem ITEM={individualData} addToCart={addToCart} handleShow3={handleShow3}/>}
        </div>

    )
}

export default ProductList