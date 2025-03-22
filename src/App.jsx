import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Feed from "./pages/feed";
import Discussion from "./pages/discussion";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
	<Route path="/" element={<Home />} />
	<Route path="/profile" element={<Profile />} />
	<Route path="/feed" element={<Feed />} />
	<Route path="/discussion" element={<Discussion />} />
      </Routes>
    </Router>
  );
}

export default App;
