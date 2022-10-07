import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components'

export default function MovieSessions() {
  const [session, setSession] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

    promise.then((res) => {
      console.log(res.data)
      setSession(res.data.days)
    })

    promise.catch((err) => {
      console.log(err.response.data)
    })
  }, [])


  return (
    <>
      <SessionContainer>
        <h1>Selecione o horário</h1>
        {session.map((info) => {
          return (
            <AvailableSessions key={info.id}>
              <h2> {info.weekday} - {info.date} </h2>
              <SessionButton >
                {info.showtimes.map((h) => {
                  return <Link key={h.id} to={`/seats/${h.id}`}>
                    <button>{h.name}</button>
                  </Link>
                })}
              </SessionButton>
            </AvailableSessions>
          )
        })}

      </SessionContainer>
      <Footer>

      </Footer>
    </>

  )
}

const SessionButton = styled.div`
  display: flex;
  gap: 4vw;

  button {
    background: #e8833a;
    border-radius: 3px;
    border: none;
    font-size: 18px;
    color: white;
    height: 43px;
    width: 83px;
}

`
const AvailableSessions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  font-weight: 400;
  font-size: 20px;
  color: #293845;
`

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  gap: 4vh;
  padding: 30px;
 
  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2vh;
    font-size: 24px;
    color: #293845;
  }
`
const Footer = styled.div`


`