import { Stack } from '@mui/system';
import React from 'react';
import cover from '../images/cover.jpg';
import menu from '../images/menu.jpg';
import styled, { keyframes } from 'styled-components'
import { Typography } from '@mui/material';




const breatheAnimation = keyframes`
 to{ 
  transform:translateY(0px);
  }
 from{
  transform:translateY(50px);
  color:#fff;
 }
 `
 const StyleButton=styled.button`
padding:5px;
width:100px;
height:30px;
background-color:#DC7633;
color:#fff;
border:none;
font-size:0.8rem;
border-radius:10px;
transition:0.2s;
&:hover {
  scale:1.1;
}
&:active{
  background-color:red;
}
 `
const StyledSpan = styled.h3`
color:#DC7633;
font-size:4rem;
animation-name: ${breatheAnimation};
animation-duration: 4s;
animation-iteration-count: 1;
`
const imageStyle ={
  maxWidth:'35%',
  objectFit:'cover'
};
const productStyle ={
  maxWidth:'50%',
  height:'140px',
  objectFit:'contain',
};
const StyledDiv = styled.div`
  width:100%;
  height:150px;
  display:flex;
  justify-content:center;
  transition:0.3s;
  &:hover {
    scale:1.1;
    transform:rotate(10deg);
  }
`

const Card = styled.div`
display:flex;
flex-direction:column;
box-shadow:15px 10px 40px 15px #88898A inset;
padding:12px;
width:250px;
height:350px;
gap:10px;
border-radius:10px;
align-items:center;
justify-content:space-between;
transition:0.2s;
&:hover {
  box-shadow:0px 0px 1px 1px #D35400 inset;
}
`
const typo = {
  backgroundColor:'#DC7633',
  color:'#fff', 
  width:'100%',
  textAlign:'center',
  borderTopLeftRadius:'50px',
  borderBottomRightRadius:'50px'
};
const pricetag ={
  fontSize:'1.5rem',
  color:'#DC7633',
  lineHeight:'20px'
}
const desc={
  color:'#5D6D7E',
  textAlign:'center',
  alignItems:'center',
  fontSize:"12px",
  height:'100px',
  overflow:'hidden',
}

function Home ({productItems,handleAddProduct}) {

const products=productItems;

  return (
    <>
    <Stack
    sx={
        {
          width:'100vw',
          height:'90vh',
          overflow:'hidden',
          backgroundImage: `url(${cover})`,
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          boxShadow:'1px 50px 500px 70px #000 inset',
        }
      }>
        <Typography m='auto' sx={{color:'#fff',fontSize:'3rem',textAlign:'center'}}>
          <StyledSpan>Bunny's Bakery</StyledSpan>
          Freshly<span style={{color:'#DC7633'}}> Baked</span> In Wooden Ovens!<br></br>
        </Typography>
       
      </Stack>

      <Stack
      display='flex'
      direction='row'
      justifyContent='space-between'
       mt='10vh'
        >

          <img src={menu} alt="imagemenu" style={imageStyle}></img>
          <Typography p={4} sx={{color:'#DC7633',fontSize:'2rem',textAlign:'center',width:'70%',backgroundColor:'#F2F3F4'}}>
            <h1 >Taste To <span style={{color:'#5D6D7E'}}>DIE</span> For</h1>
            <p  style={{color:'#5D6D7E',fontSize:'1rem'}}>It,s sweet. It,s light. It,s flaky and buttery. It,s <span style={{color:'#E67E22'}}> right</span> here.
            The croissant that makes you feel good about the world.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia elit odio,
             a volutpat mi pulvinar ac. Vestibulum pharetra leo libero, eget tempor leo laoreet et. Nunc dignissim, 
             nisl sit amet rutrum tempor, leo magna tincidunt neque, in malesuada mi magna a metus. Curabitur vitae 
             sagittis eros, fermentum lacinia leo. Vestibulum ut gravida metus, in commodo justo. Quisque sit amet sapien aliquet, 
             condimentum massa id, varius neque. Mauris mollis nisl a tortor pulvinar, non ultricies ex cursus. </p>
          </Typography>
        </Stack>

        <h2 style={{textAlign:'center',marginTop:'10vh',color:'#DC7633',fontSize:'1.5rem'}}>Products</h2>

        <Stack display='flex' flexWrap='wrap' direction='row' gap='15px' p={5} justifyContent='center'>
         {products.map((product)=>(
          <Card>
          <StyledDiv><img src={require(`../images/products/p${product.id}.png`)} alt={product.name} style={productStyle}></img></StyledDiv>
          <Typography style={typo}>{product.name}</Typography>
          <span style={pricetag}>${product.price}</span>
          <span style={desc}>{product.des}</span>
          <StyleButton onClick={()=>handleAddProduct(product)}>Add To Cart</StyleButton>
        </Card>
         ))}
        </Stack>
  </>
  )
}

export default Home