import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    loading: false,
    error: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentsAdded(state, action) {
            state.list = action.payload;
        },
        commentsError(state, action) {
            state.error = action.payload;
        },
        commentsLoading(state, action) {
            state.loading = action.payload
        },
        commentAdded(state: any, action) {
            state.list.push({ ...action.payload, id: Math.max(...state.list.map((comment: any) => comment.id)) + 1 });
        },
    }
})

export const { commentsAdded, commentsError, commentsLoading, commentAdded } = commentsSlice.actions

export default commentsSlice.reducer

export const selectComments = (state: any) => state.comments.list;
export const selectCommentsError = (state: any) => state.comments.error;
export const selectCommentsLoading = (state: any) => state.comments.loading;

export const getComments = () => (dispatch: any) => {
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