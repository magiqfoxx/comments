import { createSlice } from '@reduxjs/toolkit';

interface FavoritesState {
    list: [],
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
        favoriteAdded(state: any, { payload }: any) {
            state.list.push({ ...payload });
        },
        favoriteRemoved(state, action) {
            state.list = state.list.filter((comment: any) => {
                return comment.id !== action.payload;
            })
        },
        favoritesLoading(state, action) {
            state.loading = action.payload;
        }
    }
})

export const { favoriteAdded, favoriteRemoved, favoritesLoading } = favoritesSlice.actions

export default favoritesSlice.reducer

export const selectFavorites = (state: any) => state.favorites.list;
export const selectFavoritesLoading = (state: any) => state.favorites.loading;
