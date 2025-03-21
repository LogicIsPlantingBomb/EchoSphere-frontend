import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
	<Route path="/" element={<Home />} />
	<Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
