import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import FormContainer from "./FormContainer"

export default function SeatsScreen() {
  const [seatInfos, setSeatInfos] = useState([])
  const [clicked, setClicked] = useState([])
  const [nameSeat, setNameSeat] = useState([])
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


  function click(id, name) {
    let newClick
    let newNameSeat
    if (clicked.includes(id)) {
      newClick = clicked.filter((s) => s !== id)
      newNameSeat = nameSeat.filter((s) => s !== name)
      setClicked(newClick)
      setNameSeat(newNameSeat)
      return
    }
    newClick = [...clicked, id]
    setClicked(newClick)
    newNameSeat = [...nameSeat, name]
    setNameSeat(newNameSeat)
  }

  console.log(clicked)

  return (
    <>
      <SeatsContainer>
        <h1>Selecione o(s) assento(s)</h1>
        <PickSeats>
          {seatInfos.seats?.map((s) => {
            return (
              <Seat
                key={s.id}
                onClick={() => click(s.id, s.name)}
                style={{
                  backgroundColor: clicked.includes(s.id) ? "#1AAE9E" : s.isAvailable && "#C3CFD9",
                  borderColor: clicked.includes(s.id) ? "#0E7D71" : s.isAvailable && "#7B8B99"
                }}
                color={s.isAvailable ? "#C3CFD9" : "#FBE192"}
                border={s.isAvailable ? "#7B8B99" : "#F7C52B"}
                disabled={!s.isAvailable ? "none" : ""}
              >
                {s.name}
              </Seat>
            )
          })}
        </PickSeats>
        <SubtitlesContainer>
          <div>
            <Subtitles color="#1AAE9E" border="#0E7D71" />
            <p>Selecionado</p>
          </div>
          <div>
            <Subtitles color="#C3CFD9" border="#7B8B99" />
            <p>Disponível</p>
          </div>
          <div>
            <Subtitles color="#FBE192" border="#F7C52B" />
            <p>Indisponível</p>
          </div>
        </SubtitlesContainer>

        <FormContainer />  

      </SeatsContainer>
      <Footer>
        <img src={seatInfos.movie?.posterURL} alt={"Banner " + seatInfos.movie?.title} />
        <div>
          <p>{seatInfos.movie?.title}</p>
          <p>{seatInfos.day?.weekday} - {seatInfos.name}</p>
        </div>
      </Footer>
    </>
  )
}

const SubtitlesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    p {
      margin-top: 5px;
      font-weight: 300;
      font-size: 13px;
      font-family: "Roboto", sans-serif;
    }
`

const Subtitles = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 14px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
`

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  gap: 2vh;
  padding: 30px 15px 30px 15px;

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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5vh;
  width: 100%;
`

const Seat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  height: 23px;
  width: 23px;
  border-radius: 14px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  pointer-events: ${(props) => props.disabled};
`
const Footer = styled.div`
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
      gap: 2vh;
    }

`

