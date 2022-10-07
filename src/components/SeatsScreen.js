import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from 'styled-components'

export default function SeatsScreen() {
  const [seatInfos, setSeatInfos] = useState([])
  const { sessionId } = useParams()

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

    promise.then((res) => {
      console.log(res.data)
      setSeatInfos(res.data)
    })

    promise.catch((err) => {
      console.log(err.response.data)
    })
  }, [])



  return (
    <>
      <SeatsContainer>
        <h1>Selecione o(s) assento(s)</h1>
        <PickSeats>
          {seatInfos.seats?.map((s) => {
            return (
              <SeatPick key={s.id}>
                {s.name}
              </SeatPick>
            )
          })}
        </PickSeats>
      </SeatsContainer>
    </>
  )
}

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  gap: 2vh;
  padding: 30px;

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2vh;
    font-size: 24px;
    color: #293845;
  }
`

const PickSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vh;
  width: 100%;
`

const SeatPick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  height: 26px;
  width: 26px;
  background: #C3CFD9;
  border-radius: 12px;
`