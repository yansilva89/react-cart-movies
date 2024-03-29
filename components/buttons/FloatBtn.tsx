import styled from "styled-components"

const FloatBtn = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1001;
  width: 180px;
  height: 54px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #29ab26;
  color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .5s ease-out;
  &:hover, &:active, &:focus {
    background-color:#17769a;
  }
  @media (max-width: 500px) {
    width: 200px;
    height: 100px;
    border-radius: 80px;
    right: 3rem;
    border: 1px solid #2f2e41;
    p {
      font-size: 24px;
    }
    svg {
      display: none;
    }
  }
`

export default FloatBtn