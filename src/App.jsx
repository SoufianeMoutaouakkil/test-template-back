import "./App.css";
import GoogleCallback from "./components/auth/GoogleCallback";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
