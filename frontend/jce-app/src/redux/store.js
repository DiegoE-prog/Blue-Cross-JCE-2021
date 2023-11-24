import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import errorReducer from "./slices/errorSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

const persistConfig = {
	key: "root",
	storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
	reducer: {
		user: persistedReducer,
		error: errorReducer
	},
	middleware: [thunk]
})

export const persistor = persistStore(store)