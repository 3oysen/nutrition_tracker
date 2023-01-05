import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Sass/style.sass";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
