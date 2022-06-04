import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {mobile} from '../Responsive'

const Container= styled.div`
  width: 100vw;
  height: 100vh;
`
const Wrapper=styled.div`
  width: 100%;
  height: 80vh;

`
const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`
const Button=styled.button`
width:25%;
padding:8px 16px;
background-color: #1f8f40 ;
color: black;
${mobile({width:"50%"})};

`
const NotFound = () => {
const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>
        <Button onClick={()=>{
          navigate(`/`)
        }}>
          Go Back</Button>
        <Image src="https://www.seekahost.com/wp-content/uploads/2017/11/404-page-not-found.jpg"/>
      </Wrapper>
    </Container>
  )
}

export default NotFound