import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 2px;
  border: 1px solid rgb(236, 236, 236);
  min-width: 200px;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(236, 236, 236);
  padding: 1rem;
`;
export const Bottom = styled.div`
  padding: 1rem;
`;

export default Card;