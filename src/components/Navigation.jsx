import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
