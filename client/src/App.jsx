import React, { useEffect, useState } from "react";
import Home from "./pages/Homepage";
import Saisignup from './components/Saisignup/Saisignup'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";



function App() {
  const [user, setUser] = useState(null);
  const [subdomain, setSubdomain] = useState(null);
  useEffect( () => {
    Subdomain();
  }, []);
  const Subdomain = () => {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length > 1) {
      setSubdomain(parts[0])   // This will return the subdomain (e.g., 'hospitalA')
    }
  };
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={subdomain !== null ? <Login  setUser={setUser} /> : <Home />} />
      <Route path="/Saisignup" element={ <Saisignup />} />
      </Routes>
    </Router>
  );
}

export default App;
