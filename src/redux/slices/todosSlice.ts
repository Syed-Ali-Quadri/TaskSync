import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await response.json();
	return data;
});

const initialState = {
	items: [],
	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null
};

const todoSlice = createSlice({
	name: "todos",
	initialState: initialState,
	reducers: {
		addTodo: (state, action) => {
			state.items.push({
				id: Date.now(),
				title: action.payload,
				completed: false
			});
		},
		toggleTodo: (state, action) => {
			const todo = state.items.find(todo => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo: (state, action) => {
			state.items = state.items.filter(
				todo => todo.id !== action.payload
			);
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	}
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
