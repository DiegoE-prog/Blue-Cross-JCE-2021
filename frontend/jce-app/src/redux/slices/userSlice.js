import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		userId: null,
		username: null,
		role: null,
		isAuthenticated: false
	},
	reducers: {
		setUser: (state, action) => {
			state.userId = action.payload.userId
			state.username = action.payload.username
			state.role = action.payload.role
			state.isAuthenticated = true
		},
		logout: (state) => {
			state.userId = null
			state.username = null
			state.role = null
			state.isAuthenticated = false
		}
	}
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
