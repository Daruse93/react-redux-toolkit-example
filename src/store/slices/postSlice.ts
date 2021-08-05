import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import type { RootState } from '../';

import PostApi from '../../services/rest-api/PostApi';

interface CounterState {
    list: {
        id: number,
        userId: number,
        title: string,
        body: string,
    }[],
}

const initialState: CounterState = {
    list: [],
};

/**
 * Thunks
 * */
export const getPosts = createAsyncThunk('posts/fetchAll', async () => {
    return await PostApi.getPosts();
})

export const postSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            // state.list.push(...action.payload);
            return {
                ...state,
                list: action.payload,
            };
        });
    }
})

/**
 * Selectors
 * */
export const selectPosts = (state: RootState) => state.posts.list

export default postSlice.reducer
