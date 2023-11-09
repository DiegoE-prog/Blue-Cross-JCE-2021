import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import errorReducer from "./slices/errorSlice"

export default configureStore({
	reducer: {
		user: userReducer,
		error: errorReducer
	}
})
