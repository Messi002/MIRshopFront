import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from '../Responsive'


const Container = styled.div`
  flex:1;
  margin:3px ;
  height:70vh;
  position:relative;
`
const Image = styled.img`
 width:100%;
 height: 100%;
 object-fit:cover;
 border-radius: 10px;
 ${mobile({height:"30vh"})};


`
const Info = styled.div`
  position:absolute;
  width: 100%;
  height:100%;
  top:50%;
  left: 50%;
  transform:translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const Title = styled.h4`
  color:white;
  margin-bottom: 20px;
`
const Button = styled.button`
   border:none;
   padding: 10px;
   background-color: white;
   color:gray;
   cursor:pointer;
   font-weight: 600;
`

const CatergoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
     <Image src={item.img}/>
     <Info>
         <Title>{item.title}</Title>
         <button>SHOP NOW</button>
     </Info>
     </Link>
        </Container>
  )
}

export default CatergoryItem