import {
    createSelector,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '../';

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        /** пример с payload */
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

/**
 * Actions
 * */
export const { increment, decrement, incrementByAmount } = counterSlice.actions

/**
 * Selectors
 * */
// export const selectCount = (state: RootState) => state.counter.value
const RootSelector = (state: RootState) => state.counter;
export const selectCount = createSelector(RootSelector, (state) => state.value)

export default counterSlice.reducer
