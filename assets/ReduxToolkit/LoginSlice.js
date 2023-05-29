import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name : 'login',
    initialState : {
        isLogged : false,
        userLog : ''
    },
    reducers : {
        setLogin : (state, action) => {
            state.isLogged = action.payload
        },
        setUser : (state, {payload})=>{
            state.userLog = payload
        }
    }
})

export const {setLogin, setUser} = LoginSlice.actions

export default LoginSlice.reducer