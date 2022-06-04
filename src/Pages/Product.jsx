import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import { Add, Remove } from '@material-ui/icons';
import {mobile} from '../Responsive'


const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})};

`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:'40vh'})};

`
const InfoContainer = styled.div`
flex: 1;
padding:0px 50px;
${mobile({padding:"10px"})};

`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer= styled.div`
width:50%;
margin:30px 0px;
display: flex;
justify-content: space-between;
${mobile({width:"100%"})};

`
const Filter = styled.div`
display:flex;
align-items: center;
`
const FilterTitle= styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor= styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;

`
const FilterSize= styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption= styled.option``

const AddContainer= styled.div`
width: 50%;
display:flex;
justify-content: space-between;
align-items: center;
${mobile({width:"100%"})};

`
const AmountContainer= styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount= styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal;
display:flex;
justify-content: center;
align-items: center;
margin:0px 5px;
`
const Button= styled.button`
padding:15px;
border:2px solid teal;
background-color: white;
cursor:pointer;
font-weight: 500;
border-radius:5px;

&:hover{
    background-color: #bdaeae;
}
`





const Product = () => {
  return (
    <Container>
<Navbar/>
<Announcement/>
<Wrapper>
    <ImgContainer>
    <Image src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1638209780/671191_ZAHP0_2184_010_100_0000_Light-The-North-Face-x-Gucci-trousers.jpg"/> </ImgContainer>
    <InfoContainer>
        <Title>The North Face Gucci trouser</Title>
        <Desc>Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Molestias ab earum 
            ipsa nihil? Ea, provident illum. Fugit expedita excepturi perspiciatis nemo praesentium eligendi sunt
             veniam? Maxime labore cum ipsum eum nulla doloremque laborum quos commodi enim facilis hic ad quibusdam, 
            velit, placeat nesciunt aliquam explicabo consectetur voluptatem vel eaque laboriosam.</Desc>
        <Price>XAF 3500</Price>
        <FilterContainer>
<Filter>
    <FilterTitle>Color</FilterTitle>
    <FilterColor color="black"/>
    <FilterColor color="darkblue"/>
    <FilterColor color="red"/>

</Filter>

<Filter>
    <FilterTitle>Size</FilterTitle>
    <FilterSize>
   <FilterSizeOption>XS</FilterSizeOption>
   <FilterSizeOption>S</FilterSizeOption>
   <FilterSizeOption>M</FilterSizeOption>
   <FilterSizeOption>L</FilterSizeOption>
   <FilterSizeOption>XL</FilterSizeOption>
   <FilterSizeOption>XXL</FilterSizeOption>
   </FilterSize>


</Filter>

        </FilterContainer>

<AddContainer>
 <AmountContainer>
 <Add/>
 <Amount>1</Amount>
 <Remove/>
 </AmountContainer>

 <Button>ADD TO CART</Button>


</AddContainer>
    </InfoContainer>
</Wrapper>


<Footer/>
    </Container>
  )
}

export default Product