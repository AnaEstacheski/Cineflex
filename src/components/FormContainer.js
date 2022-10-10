import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from 'styled-components'

export default function FormContainer({ ids, seatNumber, title, date, hour }) {
  const [name, setName] = useState()
  const [cpf, setCpf] = useState()
  const navigate = useNavigate()

  function bookingSeat(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
    const body = { ids, name, cpf }

    const promise = axios.post(URL, body)

    promise.then(
      navigate("/success", {
        state: {
          buyername: name,
          buyerCPF: cpf,
          seats: { seatNumber },
          title: title,
          date: date,
          hour: hour,
        }
      })
    )

    // {
    //   console.log(body)
    // }

    promise.catch((err) => {
      console.log(err.response.data)
    })
  }

  return (
    <form onSubmit={bookingSeat}>
      <FormStyle>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          data-identifier="buyer-name-input"
          id="name"
          value={name}
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Digite seu nome..."
          required
        />

        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          data-identifier="buyer-cpf-input"
          id="cpf"
          value={cpf}
          type="text"
          maxLength="11"
          pattern="[0-9]{11}"
          onInput={(e) => (e.target.setCustomValidity(''))}
          onChange={e => setCpf(e.target.value.replace(/[^0-9]/g, ''))}
          onInvalid={(e) => e.target.setCustomValidity('CPF inválido')}
          placeholder="Digite seu CPF..."
          required
        />
      </FormStyle>
      <SubmitButton type="submit" data-identifier="reservation-btn">Reservar assento(s)</SubmitButton>
    </form>
  )
}

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto';
  margin-top: 15px; 

  label {
    color: #293845;
    font-size: 18px;
    margin: 4px;
  }
 
  input {
    width: 97%;
    height: 37px;
    border: 1px solid #D4D4D4;
    font-size: 18px;
    margin-bottom: 6px;
    padding-left: 10px;
  }

  input::placeholder {
   padding-left: 2px;
   color: #AFAFAF;
   font-style: italic;
  }
`

const SubmitButton = styled.button`
  margin: 40px 30px 10px 20px;
  width: 90%;
  height: 42px;
  background-color: #E8833A;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 17px;
  cursor: pointer;
`