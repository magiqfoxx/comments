import styled from "styled-components";

const Button = styled.button<{ secondary?: boolean }>`
  cursor:pointer; 
  height: 2rem;
  border-radius: 2px;
  color: ${(props: any) => props.secondary ? '#1890ff' : '#fff'};
  background: ${(props: any) => props.secondary ? '#fff' : '#1890ff'};
  border:none;
  box-shadow: ${(props: any) => props.secondary ? 'none' : '0 2px 0 rgba(0,0,0,.045)'};
  :hover{
    background-color: ${(props: any) => props.secondary ? 'rgb(225,245,255)' : '#6cb7fd'};
  }
`;

export default Button;