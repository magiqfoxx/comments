import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { IComment } from "../types";

interface FavoritesState {
    list: IComment[],
    loading: Boolean,
}
export const initialState: FavoritesState = {
    list: [],
    loading: false,
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        favoriteAdded(state, action: PayloadAction<IComment>) {
            state.list = [...state.list, { ...action.payload }]
        },
        favoriteRemoved(state, action: PayloadAction<number>) {
            state.list = state.list.filter((comment: IComment) => {
                return comment.id !== action.payload;
            })
        },
        favoritesLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    }
})

export const { favoriteAdded, favoriteRemoved, favoritesLoading } = favoritesSlice.actions

export default favoritesSlice.reducer

export const selectFavorites = (state: RootState) => state.favorites.list;
export const selectFavoritesLoading = (state: RootState) => state.favorites.loading;
