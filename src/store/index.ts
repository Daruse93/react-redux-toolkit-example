import { configureStore } from '@reduxjs/toolkit';

import counter from './slices/counterSlice';
import posts from './slices/postSlice';


const store = configureStore({
    reducer: {
        counter,
        posts,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
