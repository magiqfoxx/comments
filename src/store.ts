import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./store/favorites";
import commentsReducer from "./store/comments";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    comments: commentsReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;