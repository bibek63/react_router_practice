import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav style={{ fontSize: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profile/:username" element={<Profile></Profile>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
