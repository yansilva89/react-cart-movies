import styled from "styled-components"

interface ShopIconProps {
  className?: string
}

const SvgIcon = styled(ShopIcon)`
  width: 30px;
  height: 26px;
  fill: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
`
function ShopIcon({ className }: ShopIconProps) {
  return (
    <svg className={ className } viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.9518 10L16.1151 1.25335C15.9904 1.07675 15.8244 0.933372 15.6316 0.835754C15.4388 0.738135 15.2251 0.689245 15.009 0.693354C14.5826 0.693354 14.1562 0.880021 13.903 1.26669L8.06623 10H1.68313C0.950205 10 0.35054 10.6 0.35054 11.3334C0.35054 11.4534 0.363866 11.5734 0.403844 11.6934L3.78862 24.0534C4.09512 25.1734 5.12121 26 6.34719 26H23.6708C24.8968 26 25.9229 25.1734 26.2427 24.0534L29.6275 11.6934L29.6675 11.3334C29.6675 10.6 29.0678 10 28.3349 10H21.9518ZM11.0113 10L15.009 4.13335L19.0068 10H11.0113ZM15.009 20.6667C13.5432 20.6667 12.3438 19.4667 12.3438 18C12.3438 16.5334 13.5432 15.3334 15.009 15.3334C16.4749 15.3334 17.6742 16.5334 17.6742 18C17.6742 19.4667 16.4749 20.6667 15.009 20.6667Z" />
    </svg>
  )
}


export { SvgIcon }
