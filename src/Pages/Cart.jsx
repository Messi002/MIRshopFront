import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import {mobile} from '../Responsive'


const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
${mobile({margin:"10px"})};

`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding: 20px;
${mobile({flexDirection:'column'})};



`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=> props.type === "filled" && "none"};
background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
color: ${props=> props.type === "filled" && "white"};
${mobile({margin:"5px 0px"})};


`
const TopTexts= styled.div`
${mobile({display:"none"})};
  
`
const TopText=styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection:'column'})};


`
const Info = styled.div`
  flex:3;
`
const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection:'column'})};

`
const ProductDetail = styled.div`
flex:2;
display: flex;
${mobile({flexDirection:'column'})};

`
const Image = styled.img`
width:300px;
border-radius: 7px;
`
const Details = styled.div`
padding: 20px;
display:flex;
flex-direction: column;
justify-content: space-around;
${mobile({justifyContent:'space-around'})};

`;
const ProductName = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color} ;
`
const ProductId = styled.span``
const ProductSize = styled.span``
const PriceDetail = styled.span`
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
` 
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin:5px;
${mobile({margin:"5px 15px"})};

`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
${mobile({flexDirection:'column',marginBottom:'20px'})};

`
const Hr = styled.hr`
  background-color: #eee;
  border:none;
  height:1px;
  margin:10px 0px;
`
const Summary= styled.div`
  flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding: 20px;
  height: 50vh;


`
const SummaryTitle= styled.h1`
font-weight: 200;
letter-spacing: 3px;
${mobile({fontSize:'24px'})};


`
const SummaryItem= styled.div`
margin: 30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500" };
font-size: ${props => props.type === "total" && "24px" };

`
const SummaryItemText= styled.span``
const SummaryItemPrice= styled.span``
const SummaryButton= styled.button`
width: 100%;
padding: 10px;
background-color: black;
color:white;
font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
<Navbar/>
<Announcement/>
<Wrapper>
<Title>
YOUR BAG
</Title>
<Top>


  <TopButton>CONTINUE SHOPPING </TopButton>
<TopTexts>
  <TopText>Shopping Bag(2)</TopText>
  <TopText>Your Wishlist(0)</TopText>
</TopTexts>

  <TopButton type='filled'>CHECKOUT NOW</TopButton>

</Top>
<Bottom>
  <Info>
  <Product>
    <ProductDetail>
      <Image src="https://img.wallpapersafari.com/desktop/1600/900/8/48/N2suF3.jpg"/>
      <Details>
        <ProductName style={{margin:"3px 0px"}}><b>Product:</b> Air Max 90</ProductName>
        <ProductId style={{margin:"3px 0px"}}><b>ID:</b> 5839430943</ProductId>
        <ProductColor color="lightgrey" style={{margin:"3px 0px"}}/>
        <ProductSize style={{margin:"3px 0px"}}><b>Size:</b> 37</ProductSize>

      </Details>
    </ProductDetail>
    <PriceDetail> 
      <ProductAmountContainer>
        <Add/>
        <ProductAmount>2</ProductAmount>
        <Remove/>
      </ProductAmountContainer>
      <ProductPrice>XAF 5000 </ProductPrice>
    </PriceDetail>

  </Product>

  <Hr/>

  <Product>
    <ProductDetail>
      <Image src="https://images.evo.com/imgp/zoom/42425/245067/the-north-face-chain-ring-t-shirt-.jpg"/>
      <Details>
        <ProductName style={{margin:"3px 0px"}}><b>Product:</b> The North Face T-shirt</ProductName>
        <ProductId style={{margin:"3px 0px"}}><b>ID:</b> 39492222</ProductId>
        <ProductColor color="blue" style={{margin:"3px 0px"}}/>
        <ProductSize style={{margin:"3px 0px"}}><b>Size:</b> M</ProductSize>

      </Details>
    </ProductDetail>
    <PriceDetail> 
      <ProductAmountContainer>
        <Add/>
        <ProductAmount>4</ProductAmount>
        <Remove/>
      </ProductAmountContainer>
      <ProductPrice>XAF 3500 </ProductPrice>
    </PriceDetail>

  </Product>
  </Info>
  <Summary>
    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
    <SummaryItem>
      <SummaryItemText>Subtotal</SummaryItemText>
      <SummaryItemPrice>XAF 8500</SummaryItemPrice>
    </SummaryItem>

    <SummaryItem>
      <SummaryItemText>Estimated Shipping</SummaryItemText>
      <SummaryItemPrice>XAF 1000</SummaryItemPrice>
    </SummaryItem>

    <SummaryItem>
      <SummaryItemText>Shipping Discount</SummaryItemText>
      <SummaryItemPrice>XAF -1000</SummaryItemPrice>
    </SummaryItem>  

    <SummaryItem type="total">
      <SummaryItemText >Total</SummaryItemText>
      <SummaryItemPrice>XAF 8500</SummaryItemPrice>
    </SummaryItem>
    <SummaryButton>CHECKOUT NOW</SummaryButton>
  </Summary>
</Bottom>
</Wrapper>
<Footer/>

    </Container>
  )
}

export default Cart