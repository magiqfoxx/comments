import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import Comment from "./Comment";
import Loader from "../components/Loader";
import Grid from "../components/Grid";
import { IComment } from "../types";
import {
  selectComments,
  selectCommentsError,
  selectCommentsLoading,
  getComments,
  commentsLoading,
} from "../store/comments";

const { useEffect } = React;

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  const comments: [IComment] = useSelector(selectComments);
  const error = useSelector(selectCommentsError);
  const loading = useSelector(selectCommentsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    comments.length < 1 &&
      dispatch(commentsLoading(true)) &&
      dispatch(getComments());
  }, [comments, dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <p>{error}</p>
  ) : (
    <Grid>
      {comments.map((comment: IComment) => {
        return (
          <Comment
            name={comment.name}
            email={comment.email}
            body={comment.body}
            id={comment.id}
            key={comment.id}
            favoritable
          />
        );
      })}
    </Grid>
  );
};

export default Home;
