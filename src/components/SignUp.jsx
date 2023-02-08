import React from 'react';
import styled from 'styled-components';
import bread from '../images/bread.jpg';
import {Link} from 'react-router-dom';



const StyledDiv = styled.div`
width:50%;
padding:1%;
display:flex;
flex-direction:column;
background-color:#fff;
gap:2rem;
justify-content:center;
height:80vh;
align-items:center;
border-radius:10px;
`
const Input =styled.input`
width:60%;
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
box-shadow:1px 1px 2px 1px grey;
transition:0.2s;
&:hover {
  scale:1.1;
}
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
width:100vw;
height:85vh;
margin-top:2vh;
overflow:hidden;
`

function SignUp() {
  return (
    <>
      <Wrapper>
      <StyledDiv>
        <h2 style={{color:'#E6B17E'}}>Create Account</h2>
        <Input typeof='name' placeholder='Enter Your Name'></Input>
        <Input typeof='email' placeholder='Enter Email'></Input>
        <Input typeof='password' placeholder='Enter Password'></Input>
         <Link to="/SignIn"><Button>SignUp</Button></Link>
         <Link to="/SignIn">Already have an account?</Link>
      </StyledDiv>
      <StyledDiv><img src={bread} alt="images" style={{maxHeight:'100%',maxWidth:'100%',borderRadius:'10px'}}></img></StyledDiv>
      </Wrapper>
    </>
  )
}

export default SignUp