import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from 'styled-components'

export default function FormContainer() {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")

  function bookingSeat(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
    // const body = { name, description }

    const promise = axios.post(URL)

    promise.then(() => {
      // navigate("/")
    })

    promise.catch((err) => {
      console.log(err.response.data)
    })
  }

  return (
    <FormStyle>
      <form onSubmit={bookingSeat}>

      </form>
    </FormStyle>
  )
}

const FormStyle = styled.div`

`