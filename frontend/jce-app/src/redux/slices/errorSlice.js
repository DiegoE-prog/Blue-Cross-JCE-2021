import { createSlice } from "@reduxjs/toolkit"

const errorSlice = createSlice({
	name: "user",
	initialState: {
		status: null,
		msn: null,
	},
	reducers: {
		setStatus: (state, action) => {
			state.status = action.payload.status
			state.msn = action.payload.msn
		}
	}
})

export const { setStatus} = errorSlice.actions

export default errorSlice.reducer
