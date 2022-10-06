import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components'
import Movie from "./Movie"

export default function MovieScreen() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const promise = axios.get(URL)

    promise.then((res) => {
      console.log(res.data)
      setMovies(res.data) // se o array de imagens chega, guardo no estado
    })

    promise.catch((err) => {
    console.log(err.response.data)

    // OPCIONAL => mostrar erro na tela
    setError(true) // mas seto o erro como true para mostrar a mensagem de erro
    })
  }, [])



  return (
    <>
      <Top>
        <h2>Selecione o filme</h2>
      </Top>
      <Movies>
        {movies.map((mov) => <Movie key={mov.id} mov={mov} />)}
      </Movies>
    </>
  )
}


const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4vh;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  width: 100%;
  height: 810px;
`
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #293845;
  margin: 28px
`

