import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../images/headerlogo.png';
import styled from 'styled-components';



const NavLinks = styled.ul``;
const linkStyle={
  textDecoration:'none',
  width:'fit-content',
};
const StyleButton=styled.button`
background-color:#fff;
width:6rem;
height:4rem;
color: #DC7633;
font-size:1.1rem;
border:none;
transition:0.2s;
&:hover {
  scale:1.1;
  border-bottom:2px solid #E6B17E;
  text-shadow:0px 0px 2px grey;
}
&:focus {
  color:#5D6D7E;
  border-bottom:2px solid #5D6D7E;
}
`
const icon={
  backgroundColor:'red',
  color:'#fff',
  borderRadius:'20%', 
  fontSize:'1.2rem'
}
function Navbar(cartcount) {
  const Count=()=>{
  if(cartcount.count>0){
    return cartcount.count;
  }
}
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={
          {
            position:'sticky',
            top:0,
            background:'#fff',
            justifyContent:'space-between',
            height:'6vh',
            overflow:'hidden',
            zIndex:'1'
          }
        }
    >
      <Link to="/">
        <img src={logo} alt="logo" height={50} />
      </Link>
      <NavLinks style={{display:'flex',alignItems:'center',width:'30vw',justifyContent:'space-around',marginRight:'2rem'}}>
        <Link to="/" style={linkStyle}><StyleButton>Home</StyleButton></Link>
        <Link to="/Orders" style={linkStyle}><StyleButton>Orders</StyleButton></Link>
        <Link to="/Cart" style={linkStyle}><StyleButton>Cart <span style={icon}>{cartcount.count}</span></StyleButton></Link>
        <Link to="/SignIn" style={linkStyle}><StyleButton>SignIn</StyleButton></Link>
        <Link to="/SignUp" style={linkStyle}><StyleButton>SignUp</StyleButton></Link>
      </NavLinks>
    </Stack>
  )
}

export default Navbar;