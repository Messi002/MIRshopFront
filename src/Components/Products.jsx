import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {products} from '../Helpers'
import Product from './Product'
import axios from 'axios'



const Container = styled.div`
  padding:20px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
`

const Products = () => {

  


  return (
    <Container>
     {
         products.map((item)=>(
            <Product item={item} key={item.id}/>
         ))
     }
      </Container>
  )
}

export default Products