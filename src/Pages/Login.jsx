import React from 'react'
import styled from "styled-components"
import {mobile} from '../Responsive'


const Container = styled.div` 
 width: 100vw;
 height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/680070.jpg") center no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div` 
width: 25%;
padding: 20px;
background-color: white;
border-radius: 10px;
${mobile({width:"75%"})};

`
const Title = styled.h1` 
font-size: 24px;
font-weight: 300;
`
const Form = styled.form` 
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`

const Button = styled.button` 
width:40%;
border: none;
padding:12px 20px;
color:white;
letter-spacing: 2px;
background-color: teal;
cursor: pointer;
margin-bottom: 10px;
`
const Linkd = styled.a`
    margin:5px 0px;
    font-size: 10px;
    text-decoration: underline;
    cursor:pointer;

`

const Login = () => {
  return (
    <Container>
<Wrapper>
<Title>SIGN IN</Title>
<Form>
    <Input placeholder="username" />
    <Input placeholder="last name" />
<Button>LOGIN</Button>
<Linkd>FORGOTTEN PASSWORD?</Linkd>
<Linkd>CREATE A NEW ACCOUNT</Linkd>

</Form>

</Wrapper>

        
    </Container>
  )
}

export default Login