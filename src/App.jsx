import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext";
import Dashboard from "./Dashboard";
import TransactionHistory from "./TransactionHistory";
import EndOfDay from "./EndOfDay";
import Settings from "./Settings";
import Navigation from "./Navigation";
import "./App.css";
import Welcome from "./Welcome";
import Wallet from "./Wallet";
import About from "./About";
import Contact from "./Contact";

function App() {
  const location = useLocation();
  const hideNavRoutes = ["/", "/about", "/contact"];
  const showNav = !hideNavRoutes.includes(location.pathname);

  return (
    <TransactionProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<TransactionHistory />} />
          <Route path="/end-of-day" element={<EndOfDay />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {showNav && <Navigation />}
      </div>
    </TransactionProvider>
  );
}

export default App;
