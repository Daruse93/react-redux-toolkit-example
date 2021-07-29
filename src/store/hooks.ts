import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux'

import type {
    RootState,
    AppDispatch
} from './';

// Вместо `useDispatch` and `useSelector` для динамической типизации
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector