import styled from 'styled-components';
import logo from '../images/headerlogo.png';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';



const StyledDiv = styled.div`
height:auto;
max-width:400px;
margin:auto;
margin-top:5vh;
display:flex;
flex-direction:column;
background-color:#fff;
gap:2rem;
height:500px;
padding:1rem;
box-shadow:2px 2px 5px 3px grey;
align-items:center;
border-radius:10px;
justify-content:center;
`
const Input =styled.input`
width:70%;
outline:none;
border:none;
font-size:1rem;
border-bottom:2px solid #E6B17E;
text-align:center;
padding:1rem;
transition:0.2s;
&:hover {
  scale:1.1;
  border-bottom:2px solid #E6B17E;
  outline:none;
}
&:focus {
  scale:1;
  border-bottom:2px solid #E6B17E;
}
`
const Button = styled.button`
padding:10px;
width:8rem;
background-color:#D35400;
color:#fff;
border:none;
font-size:1rem;
border-radius:10px;
transition:0.2s;
&:hover {
  scale:1.1;
}
`
const formstyle={
  width:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-around',
  alignItems:'center',
  gap:'10px',
  height:'30rem'
}
function SignIn({userData}) {

  const navigate = useNavigate();
  const [mystyle, setStyle] = useState();
  const changeStyle = () => {setStyle({border:'1px solid red'});}
  function Index(){navigate("/", { replace: true });}
 

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
 
    const userFormData = Object.fromEntries(formData.entries());
    if(userData.email===userFormData.email){
      console.log('userdata',userData.email,'formdata',userFormData.email)
      userData.password===userFormData.password? Index(): Index();
    }
    else{
      changeStyle();
      };
    }


  return (
    <StyledDiv>
    <img src={logo} alt="bakery-logo" style={{maxHeight:'auto',maxWidth:'70%'}}></img>
    <h2 style={{color:'#DC7633'}}>Login</h2>
    <form method="post" onSubmit={handleSubmit} style={formstyle}>
      <Input typeof='email' name="email" placeholder='Enter Email' style={mystyle}></Input>
      <Input typeof='password'  name="password" placeholder='Enter Password' style={mystyle}></Input>
      <Button typeof='submit'>SignIn</Button>
     </form>
     <Link to="/SignUp">Dont have an account?</Link>
  </StyledDiv>
  )
}
export default SignIn