import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slices/todosSlice";
import AppRoutes from "./router/AppRoutes";
import Navigation from "./components/Navigation"; // You'll need to create this

const App = () => {
	const dispatch = useDispatch();
	const status = useSelector(state => state.todos.status);
	const error = useSelector(state => state.todos.error);

	useEffect(
		() => {
			dispatch(fetchTodos());
		},
		[dispatch]
	);

	return (
		<div className="app">
			{status === "loading" && <p>Loading...</p>}
			{status === "failed" &&
				<p>
					Error: {error}
				</p>}

			<Navigation />
			<AppRoutes />
		</div>
	);
};

export default App;
