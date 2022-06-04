import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from '../Responsive'


const Container = styled.div`
  display: flex;
${mobile({flexDirection:"column"})};

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin:20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%; 
color:white;
background-color:#${props => props.color} ;
display: grid;
place-items: center;
margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
${mobile({display:"none"})};

`
const Title= styled.h3`
 margin-bottom: 30px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display:flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
${mobile({backgroundColor:"#dad3d3"})};


`
const ContactItem = styled.div`
    margin-bottom: 20px;
   display:flex;
   align-items:center;
`
const PaymentSection=styled.div`
display: flex;
background: blue;
`

const Payment = styled.img`
    width: 30%;
    height:30%;
    object-fit: contain;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          MIR<sup style={{fonSize:'0.3rem'}}>2</sup> Tech
        </Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          libero accusamus at ullam qui vel similique quis. Recusandae est
          laudantium delectus temporibus enim quaerat in, qui cumque adipisci
          sunt voluptatem inventore quasi deserunt officia architecto, nulla
          tenetur porro magnam, tempora aspernatur laboriosam maiores quidem
          tempore. Ad nulla aliquam mollitia pariatur!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
<Title>Useful Links</Title>
<List>
    <ListItem>Home</ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>Man Fashion</ListItem>
    <ListItem>Woman Fashion</ListItem>
    <ListItem>Accessories</ListItem>
    <ListItem>My Account</ListItem>
    <ListItem>Order Tracking</ListItem>
    <ListItem>Wishlist</ListItem>
    <ListItem>Terms</ListItem>

</List>

      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
           <Room style={{marginRight:'10px'}}/>   Molyko Buea, Cameroon
          </ContactItem>
          <ContactItem>
           <Room style={{marginRight:'10px'}}/>  Poste Centrale Yaounde, Cameroon
          </ContactItem>
          <ContactItem>
           <Phone style={{marginRight:'10px'}}  />  +237 653-921-635
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:'10px'}}/> rostandmessi2@gmail.com
          </ContactItem>
                
        <Payment src="https://www.city-pension.com/wp-content/uploads/2021/08/epay_paypal_kreditkarte.png"/>
          <Payment src="https://www.dev.evefreys.com/img/psblog/b/lg-b-mtn.jpeg" />
         

      </Right>
    </Container>
  );
};

export default Footer;
