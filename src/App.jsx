import "./App.css";
import GoogleCallback from "./components/auth/GoogleCallback";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FacebookCallback from "./components/auth/FacebookCallback";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HandlingFile from "./pages/HandlingFile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/auth/facebook/callback" element={<FacebookCallback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload-file" element={<HandlingFile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
