import { useLocation } from "react-router-dom"
import styled from "styled-components"

export default function Success() {
  const { state } = useLocation()

  return (
    <SucessContainer>
      <h2>Pedido feito com sucesso!</h2>
      <h3>Filme e Sessão</h3>
      <p>{state.title}</p>
      <p>
        {state.date} {state.hour}
      </p>
      <h3>Ingressos</h3>
      {state.seats.seatNumber.map((s, i) => {
        return <p key={`seats${i}`}>Assento {s}</p>
      })}
      <h3>Comprador</h3>
      <p>Nome: {state.buyername}</p>
      <p>CPF: {state.buyerCPF}</p>

     
    </SucessContainer>
  )
}

const SucessContainer = styled.div`
  font-family: 'Roboto';
	padding: 0 30px;
  line-height: 28px;
  letter-spacing: 0.04em; 

	h2 {
		font-size: 24px;
		font-weight: 700;
		color: #247A6B;
		margin: 25px 70px;
		text-align: center;
	}

	h3 {
		font-size: 24px;
		font-weight: 700;
		color: #293845;
		margin: 20px 0 10px 0;
	}

	p {
		color: #293845;
		font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
		margin: 3px 0;
	}
`