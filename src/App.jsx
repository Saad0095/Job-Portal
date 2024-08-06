import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import JobListing from "./components/JobListing"; 
import Apply from "./components/Apply";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<PrivateRoute><Apply /></PrivateRoute>} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
