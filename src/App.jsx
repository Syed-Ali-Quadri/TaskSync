import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addTodo,
	deleteTodo,
	toggleTodo,
	fetchTodos
} from "./redux/slices/todosSlice.js";

const App = () => {
	const dispatch = useDispatch();

	const todos = useSelector(state => state.todos.items);
	const error = useSelector(state => state.todos.error);
	const status = useSelector(state => state.todos.status);

	const [newTodo, setNewTodo] = useState("");

	useEffect(
		() => {
			dispatch(fetchTodos());
		},
		[dispatch]
	);

	const handleAddTodo = () => {
		if (newTodo.trim()) {
			dispatch(addTodo(newTodo));
			setNewTodo("");
		}
	};

	return (
		<div>
			<h2>Todo List</h2>
			<div>
				<input
					type="text"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
					placeholder="Add a new todo"
				/>
				<button onClick={handleAddTodo}>Add Todo</button>
			</div>

			{status === "loading" && <p>Loading...</p>}
			{status === "failed" &&
				<p>
					Error: {error}
				</p>}
			{status === "succeeded" &&
				<ul>
					{todos.map(todo =>
						<li key={todo.id}>
							<span
								style={{
									textDecoration: todo.completed
										? "line-through"
										: "none"
								}}
								onClick={() => dispatch(toggleTodo(todo.id))}
							>
								{todo.title}
							</span>
							<button
								onClick={() => dispatch(deleteTodo(todo.id))}
							>
								Delete
							</button>
						</li>
					)}
				</ul>}
		</div>
	);
};

export default App;
