import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { favoriteAdded, favoriteRemoved } from "../store/favorites";
import { IComment } from "../types";

import Button from "../components/Button";
import Card, { Top, Bottom } from "../components/Card";

const Name = styled.h3`
  font-weight: 600;
`;
const Email = styled.span`
  font-size: 0.8rem;
`;
const Content = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 0;
`;

export interface CommentProps extends IComment {
  removable?: Boolean;
  favoritable?: Boolean;
}
const Comment: React.SFC<CommentProps> = ({
  name,
  email,
  body,
  id,
  removable,
  favoritable,
}) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <Top>
        <Name>{name}</Name>
        {favoritable && (
          <Button
            onClick={() => dispatch(favoriteAdded({ name, email, body, id }))}
            secondary={true}
          >
            Add to favorites
          </Button>
        )}
        {removable && (
          <Button onClick={() => dispatch(favoriteRemoved(id))} secondary>
            Remove
          </Button>
        )}
      </Top>
      <Bottom>
        <Email>{email}</Email>
        <Content>{body}</Content>
      </Bottom>
    </Card>
  );
};

export default Comment;
