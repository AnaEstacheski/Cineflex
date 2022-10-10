import { useLocation, Link } from "react-router-dom"
import styled from "styled-components"

export default function Success() {
  const { state } = useLocation()

  return (
    <SucessContainer data-identifier="seat-infos-reserve-finished">
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

      <ButtonHome>
        <Link to="/">
          <button data-identifier="back-to-home-btn">
            Voltar para Home
          </button>
        </Link>
      </ButtonHome>
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
const ButtonHome = styled.div`
	display: flex;
	justify-content: center;

	button {
		width: 225px;
		height: 42px;
		border: none;
		background-color: #e8833a;
		color: #ffffff;
		border-radius: 3px;
		margin: 20px 0;
		padding: 8px 10px;
		font-size: 18px;
    line-height: 21px
    letter-spacing: 0.04em;
    cursor: pointer;
	}
`