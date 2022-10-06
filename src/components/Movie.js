import React from 'react'
import styled from 'styled-components'

export default function Movie({ mov }) {
  return (
    <Poster>
      <img src={mov.posterURL} alt="Poster"/>     
    </Poster>
  )
}

const Poster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 129px;
  height: 193px;
  box-shadow: 0px 2px 4px 2px #0000001A;
  padding: 8px;
 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`