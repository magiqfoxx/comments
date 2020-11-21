import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./store/favorites";
import commentsReducer from "./store/comments";

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    comments: commentsReducer,
  },
});
