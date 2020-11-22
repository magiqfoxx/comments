import React from "react";
import { useSelector } from "react-redux";

import { IComment } from "../types";
import Comment from "./Comment";
import Grid from "../components/Grid";
import Loader from "../components/Loader";
import { selectFavorites, selectFavoritesLoading } from "../store/favorites";

export interface FavoritesProps {}

const Favorites: React.SFC<FavoritesProps> = () => {
  const favorites = useSelector(selectFavorites);
  const loading = useSelector(selectFavoritesLoading);
  return !loading ? (
    <Grid>
      {favorites.map((favorite: IComment) => {
        return (
          <Comment
            id={favorite.id}
            name={favorite.name}
            email={favorite.email}
            body={favorite.body}
            key={favorite.id}
            removable
          />
        );
      })}
    </Grid>
  ) : (
    <Loader />
  );
};

export default Favorites;
