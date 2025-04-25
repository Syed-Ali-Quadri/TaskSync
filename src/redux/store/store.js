import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice.js";
import todoReducer from "../slices/todosSlice.js";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todoReducer
	}
});

export default store;
