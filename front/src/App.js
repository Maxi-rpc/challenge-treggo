import { BrowserRouter, Routes, Route } from "react-router-dom";
//import logo from "./logo.svg";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from "./pages/index";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
