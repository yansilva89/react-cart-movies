import { useSelector } from 'react-redux';
import styled from "styled-components";
import { RootState } from '../../store';
import ProductNumber from "./ProductNumber";
import ProductPrice from "./ProductPrice";
import ProductSubTotal from "./ProductSubTotal";
import TrashCol from "./TrashColumn";

const LineTable = styled.div`
  width: '100%';
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  @media (max-width: 500px) {
    flex-direction: column;
    position: relative;
    margin-bottom: 3rem;
  }
`

export default function LineTableCart() {
  const itemsLine = useSelector((state: RootState) => state.cartState.items)

  return (
    <>
      {itemsLine.map((item) => (
        <LineTable key={item.id} >
          <ProductPrice image={item.image} name={item.title} price={item.price} />
          <ProductNumber id={item.id} />
          <ProductSubTotal id={item.id} />
          <TrashCol item={item} />
        </LineTable>
      ))}
    </>
  )
}