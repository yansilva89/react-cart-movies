import styled from "styled-components"

interface TrashIconProps {
  className?: string
}

const TrashIconSvg = styled(TrashIcon)`
  width: 18px;
  height: 18px;
  fill: #009EDD;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 56px;
    height: 56px;
  }
`
function TrashIcon({ className }: TrashIconProps) {
  return (
    <svg className={ className } viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.99736 16C1.99736 17.1 3.17447 18 4.61316 18H15.0764C16.5151 18 17.6922 17.1 17.6922 16V4H1.99736V16ZM19.0001 1H14.4224L13.1145 0H6.57501L5.26711 1H0.689453V3H19.0001V1Z" />
    </svg>
  )
}


export { TrashIconSvg }
