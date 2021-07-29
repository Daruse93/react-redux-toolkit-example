import { configureStore } from '@reduxjs/toolkit';

import counter from './slices/counterSlice';


const store = configureStore({
    reducer: {
        counter,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;