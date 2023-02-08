import React from 'react'
import { Stack } from '@mui/system'

const imageStyle = {
  height:'100px',
  width:'100px',
  borderRadius:'30px',
  objectFit:'contain'
};
function Orders({OrderItems}) {
  const data=OrderItems;
  return (
    <Stack display='flex' direction='column' m='auto' p={1} alignItems='center' sx={{border:'0px solid red', minHeight:'100vh',Width:'70vw',backgroundColor:'#f3f3f3'}}>
    <h2>Orders</h2>
    {
    data.length === 0 ? (<h3>No Order Has Been Placed</h3>):
    data.map((item)=>(
      <Stack display='flex' direction='row' p={1} justifyContent='space-around' alignItems='center' gap='10px' sx={{border:'0px solid red',height:'120px',width:'80%',backgroundColor:'#ddd'}}>
      <img src={require(`../images/products/p${item.id}.png`)} alt={item.name} style={imageStyle}></img>
      <h3 style={{width:'10%'}}>{item.name}</h3>
      <h3  style={{width:'10%'}}>${item.price}</h3>
      </Stack>
    ))}
    </Stack>
  )
}

export default Orders