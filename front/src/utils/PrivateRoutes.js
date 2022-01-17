import { Route, Navigate } from "react-router-dom";

const privateRoutes = ({ path, exact, element }) => {
	const token = localStorage.getItem("token");
	return token ? (
		<Route path={path} exact={exact} element={element}></Route>
	) : (
		<Navigate to={"/login"}></Navigate>
	);
};

export default privateRoutes;
