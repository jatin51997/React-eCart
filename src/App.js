import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState,useEffect } from 'react';
import ProductItem from './components/ProductItem';
function App() {
  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999,
      item: 1,
      desc:"Amp up your everyday style with a pair of turquoise casual flip flops for men from Paragon. The printed soles on this pair are both comfortable and stylish, ideal for everyday use, indoor use and for your holidays. The sturdy V-Straps and extra cushioning ensure ample support and grip to power your walks with ease."
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599,
      item: 2,
      desc:"ML-LR117 Premium Colloction Blue Dial Stainless Steel Chain Premium Colloction Blue Dial Stainless Steel Chain Analog Watch - For Men"
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000,
      item: 3,
      desc:"This highly portable device delivers powerful performance with 11th Gen Intel® Core™ vPro® processors, optional NVIDIA discrete graphics, and fast memory. Plus, productivity features like Modern Standby and Rapid Charge technology mean it’s ready to roll when you are."
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000,
      item: 4,
      desc:"1080p full HD Plug & Play Wi-Fi PT camera, which enables crisp images that reveal the smallest details with absolute clarity. Now, Works with Alexa & Ok Google so you can go hands-free and enjoy the safety of a smart home."
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000,
      item: 5,
      desc:"Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use;The most crack-resistant front crystal yet on an Apple Watch, IP6X dust resistance and swimproof design"
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100,
      item: 6,
      desc:"latest gloosy finished full color mugs, best full color mug for gift, unique and trendy gloosy looks, high quality ceramic mug, special occassion mug"
    },
  ])


  const[cart,setCArt]=useState([]);
  const[showCart,setShowCart]=useState(false)
  const [showProductItem,setShowProductItem]=useState(false);
  const [ProductItem,setProductItem]=useState([]);

  //cart logic
  const addToCart=(data)=>{
    document.getElementById('addedItem').style.display = "block";
    setTimeout(() => {
      document.getElementById('addedItem').style.display = "none";
    }, 500)
    var temp = cart;
    if(cart.length == 0){
      setCArt([...cart,{...data,quantity:1}]);
    }else {
      var flag = false;
      cart.map((item, index) => {
        if(item.item === data.item) {
          item.quantity += 1;
          flag = true;
          setCArt(temp);
        }
      })
      if(!flag) {
        setCArt([...cart,{...data,quantity:1}]);
      }
    }

     
  }

  
  const handleShow=(value)=>{
    setShowCart(value);
  }
  const Delete = (index) => {
    let newCart=[...cart]
    newCart.splice(index,1);
    setCArt(newCart);

    console.log("delete")
}
  return (
    <div className="App">
      <Navbar cart={cart} handleShow={handleShow} />
      {
        showCart ?
      <CartList cart={cart} Delete={Delete}/>
        :
      <ProductList product={product} addToCart={addToCart} />
      }
    </div>
  );
}

export default App;
