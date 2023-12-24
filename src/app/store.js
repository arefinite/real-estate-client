import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import NavSlice from '../features/NavSlice'
export const store = configureStore({
    reducer: {
        auth: authSlice,
        nav: NavSlice
    },
})