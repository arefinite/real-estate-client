import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode: false
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNav: (state) => {
            state.mode = !state.mode
        }
    }
})

export const {setNav} = navSlice.actions
export default navSlice.reducer