import React from "react";
import { Routes, Route } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext";
import Dashboard from "./Dashboard";
import TransactionHistory from "./TransactionHistory";
import EndOfDay from "./EndOfDay";
import Settings from "./Settings";
import Navigation from "./Navigation";
import "./App.css";

function App() {
  return (
    <TransactionProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<TransactionHistory />} />
          <Route path="/end-of-day" element={<EndOfDay />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Navigation />
      </div>
    </TransactionProvider>
  );
}

export default App;
