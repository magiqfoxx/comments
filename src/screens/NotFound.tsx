import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import NotFoundImg from "../assets/icons/404.svg";

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Image = styled.img`
  width: 300px;
`;

const NotFound: React.SFC = () => {
  return (
    <Container>
      <Title>Nic tutaj nie ma...</Title>
      <Image src={NotFoundImg} alt="404" />
    </Container>
  );
};

export default NotFound;
