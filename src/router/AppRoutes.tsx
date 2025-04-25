import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/AboutUs";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default AppRoutes;
