import React from 'react'
import styled from "styled-components"

export default function Navbar() {
    
  return (
    <NavBar>
      <h1>CINEFLEX</h1>
    </NavBar>
  )
}


const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 375px;
  height: 67px;
  background-color: #c3cfd9;
  color: #e8833a;
  
  h1 {
    font-family: 'Roboto';
    font-size: 34px;
    text-align: center;
  }
`