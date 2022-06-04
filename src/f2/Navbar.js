import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.style";


import styled from 'styled-components'
import {mobile} from '../Responsive'


const Logo = styled.h1`

 font-weight:bold;
 color:white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;

 ${mobile({fontSize:'18px'})}

`

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/products/:category">Category</NavbarLink>
            <NavbarLink to="/product/:id"> Product</NavbarLink>
            <NavbarLink to="/cart"> Cart</NavbarLink>
            <NavbarLink to="/login">Login</NavbarLink>
            <NavbarLink to="/register">Register</NavbarLink>
            

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}>
              {extendNavbar ? <div> &#10005;</div> : <div> &#8801;</div>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        <Logo>MIR<sup style={{fontSize:'0.7rem'}}>2</sup> shop </Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/products/:category">Category</NavbarLinkExtended>
            <NavbarLinkExtended to="/product/:id"> Product</NavbarLinkExtended>
            <NavbarLinkExtended to="/cart"> Cart</NavbarLinkExtended>
            <NavbarLinkExtended to="/login">Login</NavbarLinkExtended>
            <NavbarLinkExtended to="/register">Register</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
