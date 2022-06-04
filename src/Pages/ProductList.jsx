
import React,{useState} from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';
import {mobile} from '../Responsive'



const Container = styled.div` `

const Title = styled.h1`
margin:20px;
`
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
`
const Filter = styled.div`
margin:20px;
${mobile({margin:"0px 20px",display:'flex',flexDirection:'column'})};

`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
${mobile({marginRight:"0px"})};

`
const Select= styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0px"})};

`
const Option= styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState()
    const [sort, setSort] = useState("newest")

const hanldeFilter=(e)=>{
 const value = e.target.value;
 setFilter({
    ...filter,[e.target.name]:value,
 })
}

  return (
   <Container>
<Navbar/>
<Announcement/>
<Title>Our Products</Title>
<FilterContainer>
  <Filter><FilterText>Filter Products:</FilterText>
  <Select>
      <Option name="color" disabled onChange={hanldeFilter}>Color</Option>
      <Option>White</Option>
      <Option>Black</Option>
      <Option>Red</Option>
      <Option>Blue</Option>
      <Option>Yellow</Option>
      <Option>Green</Option>
  </Select>

  <Select>
      <Option name="size" disabled onChange={hanldeFilter}>Size</Option>
      <Option>XS</Option>
      <Option>S</Option>
      <Option>M</Option>
      <Option>L</Option>
      <Option>XL</Option>
  </Select>
  
  </Filter>  
  <Filter><FilterText>Sort Products:</FilterText>  
  <Select onChange={e=>setSort(e.target.value)}>
      <Option value="newest">Newest</Option>
      <Option value="asc">Price (asc)</Option>
      <Option value="desc">Price (desc)</Option>
     
  </Select>
  
     </Filter>  

</FilterContainer>
<Products cat={cat} filter={filter} sort={sort}/>
<Newsletter/>
<Footer/>

   </Container>
  )
}

export default ProductList