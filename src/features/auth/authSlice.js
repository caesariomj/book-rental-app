import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { data, accessToken } = action.payload;
            state.user = data;
            state.token = accessToken;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        // Reducers for refreshToken
    }
})

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;