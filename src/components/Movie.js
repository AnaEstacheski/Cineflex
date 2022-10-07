import { Link } from "react-router-dom"
import styled from 'styled-components'

export default function Movie({ mov }) {
  return (
    <Poster>
      <Link to={`/movies/${mov.id}`}>
        <img src={mov.posterURL} alt="Poster"/>   
      </Link>
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