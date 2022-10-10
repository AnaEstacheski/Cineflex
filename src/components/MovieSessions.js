import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components'

export default function MovieSessions() {
  const [session, setSession] = useState([])
  const [data, setData] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

    promise.then((res) => {
      console.log(res.data)
      setSession(res.data.days)
      setData(res.data)
    })

    promise.catch((err) => {
      console.log(err.response.data)
    })
  }, [])


  return (
    <>
      <SessionContainer data-identifier="session-date">
        <h1>Selecione o horário</h1>

        {session.map((info) => {
          return (
            <AvailableSessions key={info.id}>
              <h2> {info.weekday} - {info.date} </h2>

              <SessionButton data-identifier="hour-minute-btn">
                {info.showtimes.map((h) => {
                  return <Link key={h.id} to={`/session/${h.id}`}>
                    <button>{h.name}</button>
                  </Link>
                })}
              </SessionButton>

            </AvailableSessions>
          )
        })}
      </SessionContainer>

      <Footer data-identifier="movie-img-preview">
        <img src={data.posterURL} alt={"Banner " + data.title} />
        <p>{data.title}</p>
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
    cursor: pointer;
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
  position: fixed;
  bottom: 0;
  height: 116px;
  width: 100%;
  background-color: #DFE6ED;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  border: 1px solid #9EADBA;

    img {
      height: 70%;
      width: auto;
      border: 8px solid #ffffff;
      margin: 0 20px 0 18px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    p {
      font-size: 24px;
      color: #293845;
    }

`