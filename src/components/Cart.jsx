import { Typography } from '@mui/material';
import {Stack} from '@mui/system'
import React from 'react'
import styled from 'styled-components';






const imageStyle = {
  height:'100px',
  width:'100px',
  borderRadius:'30px',
  objectFit:'contain'
};
const Table=styled.table`
padding:20px;
width:100%;
`
const Td = styled.td`
padding:10px;
border-bottom:5px solid #DC7633;
text-align:center;
`
const Button=styled.button`
width:fit-content;
font-size:1rem;
padding:8px;
height:fit-content;
border:none;
border-radius:5px;
background-color:#DC7633;
color:#fff;
`
function Cart({cartItems,handleAddProduct,handleRemoveProduct,handleClearCart,handleClearProduct,handlePlaceOrder}) {

  
  let totalBill=0;
  const TotalBill=(num)=>{
    totalBill=num+totalBill;
  }
  return (
  <>
   <Stack display='flex' direction='column' m='auto' p={5} alignItems='center' sx={{border:'0px solid red',minHeight:'70vh',Width:'auto',backgroundColor:'#f3f3f3'}}>
   <span>Cart</span>
   <Stack display='flex' direction='column' p={1} justifyContent='center' alignItems='center' gap='10px' sx={{border:'2px solid #DC7633',height:'auto',width:'90%',backgroundColor:'#ddd'}}>
   <Table>
      <thead>
        <tr>
          <Td>Product</Td>
          <Td>Name</Td>
          <Td>Quantity</Td>
          <Td>Unit Price</Td>
          <Td>Total Price</Td>
          <Td></Td>
        </tr>
      </thead>
      <tbody>
           
   {cartItems.length === 0 ? (<h3>Cart is Empty</h3>):
   cartItems.map((items)=>(
        <tr>
          <Td><img src={require(`../images/products/p${items.id}.png`)} alt={items.name} style={imageStyle}></img></Td>
          <Td><span >{items.name}</span></Td>
          <Td><span ><Button style={{backgroundColor:'green'}} onClick={()=>handleAddProduct(items)}>+</Button> {items.quantity} <Button  style={{backgroundColor:'red'}} onClick={()=>handleRemoveProduct(items)}>-</Button></span></Td>
          <Td> <span >${items.price}</span></Td>
          <Td><span  >Total:${parseFloat(Number(items.price)*Number(items.quantity)).toFixed(1)}</span></Td>
          <Td> <Button style={{backgroundColor:'red'}} onClick={()=>handleClearProduct(items)}>Remove</Button></Td>
          {TotalBill(Number(items.price*Number(items.quantity)))}
        </tr>
        ))}
      </tbody>
    </Table>
    <Typography>TotalBill ${parseFloat(totalBill).toFixed(1)}</Typography>
      <Button onClick={()=>handlePlaceOrder(totalBill)}>Place Order</Button>
      <Button onClick={handleClearCart} style={{backgroundColor:'red'}}>Clear Cart</Button>
     </Stack>
     </Stack>
   </>
  )
}

export default Cart