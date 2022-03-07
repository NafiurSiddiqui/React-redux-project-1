import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
	name: 'authentication',
	initialState: initialAuthState,
	reducers: {
		//👆 make sure to plural this
		//methods
		logIn(state) {
			state.isAuthenticated = true;
		},
		logOut(state) {
			state.isAuthenticated = false;
		},
	},
});

export default authSlice.reducer;

//dispatcher

export const authActions = authSlice.actions;
