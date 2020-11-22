import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState, AppDispatch } from '../store';
import { INewComment, IComment, IAPIComment } from "../types";

interface CommentsState {
    list: IComment[],
    loading: Boolean,
    error: string,
}
export const initialState: CommentsState = {
    list: [],
    loading: false,
    error: ''
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentsAdded(state, action: PayloadAction<[IAPIComment]>) {
            state.list = action.payload;
        },
        commentsError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        commentsLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        commentAdded(state, action: PayloadAction<INewComment>) {
            let newId: number = state.list.length > 0 ? Math.max(...state.list.map((comment: IComment) => comment.id)) + 1 : 1;
            state.list = [...state.list, { ...action.payload, id: newId }]
        },
    }
})

export const { commentsAdded, commentsError, commentsLoading, commentAdded } = commentsSlice.actions

export default commentsSlice.reducer

export const selectComments = (state: RootState) => state.comments.list;
export const selectCommentsError = (state: RootState) => state.comments.error;
export const selectCommentsLoading = (state: RootState) => state.comments.loading;

export const getComments = () => (dispatch: AppDispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => {
            dispatch(commentsAdded(data.slice(data.length - 21)));
            dispatch(commentsLoading(false));
        })
        .catch((error) => {
            dispatch(commentsError(error));
            dispatch(commentsLoading(false));
        });
};