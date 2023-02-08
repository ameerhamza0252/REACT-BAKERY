import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React,{useState} from 'react';
import {Box} from '@mui/material';
import {Navbar,Home,SignIn,SignUp,Orders,Cart, AppFooter} from './components';
import './components/index';
import data from './components/Data.js';



function App() {
  const {productItems}=data;
  const [cartItems,setCartItems] = useState([]);
  const [OrderItems,setOrderItems]=useState([]);
  const [count,setcount]=useState(0);
  
  console.log("app",count)
  const userData = {
    'email':'abc@gmail.com',
    'password':'abc123'
  }

  const handleAddProduct =(product)=> {
  const checkproduct = cartItems.find((item)=>item.id=== product.id);
  if(checkproduct){
    setCartItems(cartItems.map((item)=>item.id=== product.id?
    {...checkproduct,quantity:checkproduct.quantity+1}:item));
    if(cartItems.length>0){setcount(cartItems.length)};
  }
  else{
    setCartItems([...cartItems,{...product,quantity:1}])

    setcount(cartItems.length+1);
    console.log("ElseCartITem",cartItems.length,cartItems)
  }
}
const handleRemoveProduct =(product)=> {
  const checkproduct = cartItems.find((item)=>item.id=== product.id);
  if(checkproduct.quantity === 1){
    setCartItems(cartItems.filter((item)=>item.id !== product.id));
    setcount(cartItems.length);
  }
  else{
    setCartItems(cartItems.map((item)=>item.id=== product.id?
    {...checkproduct,quantity:checkproduct.quantity-1}:item));
    if(cartItems.length>0){setcount(cartItems.length)};
  }
 }
 const handleClearProduct=(product)=>{
  setCartItems(cartItems.filter((item)=>item.id !== product.id));
  if(cartItems.length>0){setcount(cartItems.length)};
 }
 const handleClearCart=()=>{
  setCartItems([]);
  setcount(0);
 }
 const handlePlaceOrder=()=>{
  if(cartItems.length>0){setOrderItems(cartItems)}
  setCartItems([]);
  setcount(0);
  }
  return (
    <BrowserRouter>
      <Box>
          <Navbar count={count}/>
          <Routes>
            <Route path="/" exact element={<Home productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/SignIn" element={<SignIn userData={userData}/>}/>
            <Route path="/SignUp/" element={<SignUp/>}/>
            <Route path="/Orders/" element={<Orders OrderItems={OrderItems}/>}/>
            <Route path="/Cart/"  
              element={<Cart cartItems={cartItems} 
              handleAddProduct={handleAddProduct} 
              handleRemoveProduct={handleRemoveProduct}
              handleClearCart={handleClearCart}
              handleClearProduct={handleClearProduct}
              handlePlaceOrder={handlePlaceOrder}
              />}/>
          </Routes>
      </Box>
      <AppFooter/>
    </BrowserRouter>
  );
}

export default App;
