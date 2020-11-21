import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { IComment } from "../types";
import Comment from "./Comment";
import Grid from "../components/Grid";
import Loader from "../components/Loader";
import {
  favoriteRemoved,
  selectFavorites,
  selectFavoritesLoading,
} from "../store/favorites";

export interface FavoritesProps {}

const Favorites: React.SFC<FavoritesProps> = () => {
  const favorites = useSelector(selectFavorites);
  const loading = useSelector(selectFavoritesLoading);
  const dispatch = useDispatch();
  return !loading ? (
    <Grid>
      {favorites.map((favorite: IComment) => {
        return (
          <>
            <Comment
              id={favorite.id}
              name={favorite.name}
              email={favorite.email}
              body={favorite.body}
              removable
            />
          </>
        );
      })}
    </Grid>
  ) : (
    <Loader />
  );
};

export default Favorites;
