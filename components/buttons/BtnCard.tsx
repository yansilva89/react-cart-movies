import styled from "styled-components"
import { CartIcon } from "../icons/CartIconSvg"
interface AddCartProps {
  changeColor: boolean
}

const AddCart = styled.button<AddCartProps>`
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ changeColor }) => changeColor ? '#039B00' : '#009EDD'};
  color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color .5s ease-out;
  &:hover, &:active {
    background-color: ${({ changeColor }) => changeColor ? '#026d00' : '#17769a'};
  }
  p {
    color: #fff !important;
  }
  .icon-text {
    span {
      display: flex;
      align-items: center;
      margin-right: 10px;
      p {
        color: #fff;
      }
    }
  }

  @media (max-width: 500px) {
    height: 84px;
    p {
      font-size: 24px !important;
    }
    .icon-text {
      span {}
    }
  }
`

export default function BtnCard({ onClick, changeColorBtn }) {

  return (
    <>
      <AddCart changeColor={changeColorBtn} onClick={onClick}>
        <div className="icon-text">
          <span>
            <CartIcon />
            <p>{ changeColorBtn ? '1' : '0' }</p>
          </span>
        </div>
        <p>{changeColorBtn ? 'item adicionado' : 'adicionar ao carrinho'}</p>
      </AddCart>
    </>
  )
}