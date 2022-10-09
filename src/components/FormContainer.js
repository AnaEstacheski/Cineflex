import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from 'styled-components'

export default function FormContainer({ ids, seatNumber }) {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const navigate = useNavigate()

  function bookingSeat(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
    const body = { ids, name, cpf }

    const promise = axios.post(URL, body)

    promise.then(() => {
      console.log('recebi')
      console.log(body)
      navigate("/success")
    })

    promise.catch((err) => {
      console.log(err.response.data)
    })
  }

  return (

    <form onSubmit={bookingSeat}>
      <FormStyle>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Digite seu nome..."
          required
        />

        <label htmlFor="cpf">CPF do comprador:</label>
        <input
        id="cpf"
        value={cpf}
        onChange={e => setCpf(e.target.value)}
        type="text"
        placeholder="Digite seu CPF..."
        required
        />
      </FormStyle>
      <SubmitButton type="submit">Reservar assento(s)</SubmitButton>
    </form>
  )
}

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: 'Roboto';
  margin-top: 15px;
 

  label {
    color: #293845;
    font-size: 18px;
    margin: 4px;
  }
 
  input {
    width: 100%;
    height: 37px;
    border: 1px solid #D4D4D4;
    font-style: italic;
    font-size: 18px;
    margin-bottom: 6px;
  }

  input::placeholder {
   padding-left: 10px;
   color: #AFAFAF;
  }
`

const SubmitButton = styled.button`
  margin: 40px 30px 10px 30px;
  width: 80%;
  height: 42px;
  background-color: #E8833A;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 17px;
`