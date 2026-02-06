import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`${styles.navigation} ${isOpen ? "" : styles.closed}`}>
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Hide Navigation" : "Show Navigation"}
      >
        {isOpen ? "▼" : "▲"}
      </button>
      <Link
        to="/dashboard"
        className={`${styles.navItem} ${isActive("/dashboard") ? styles.active : ""}`}
        title="Dashboard"
      >
        <span className={styles.icon}>📊</span>
        <span className={styles.label}>Dashboard</span>
      </Link>
      <Link
        to="/history"
        className={`${styles.navItem} ${
          isActive("/history") ? styles.active : ""
        }`}
        title="Transaction History"
      >
        <span className={styles.icon}>📋</span>
        <span className={styles.label}>History</span>
      </Link>
      <Link
        to="/end-of-day"
        className={`${styles.navItem} ${
          isActive("/end-of-day") ? styles.active : ""
        }`}
        title="End of Day"
      >
        <span className={styles.icon}>🌙</span>
        <span className={styles.label}>End-of-Day</span>
      </Link>
      <Link
        to="/settings"
        className={`${styles.navItem} ${
          isActive("/settings") ? styles.active : ""
        }`}
        title="Settings"
      >
        <span className={styles.icon}>⚙️</span>
        <span className={styles.label}>Settings</span>
      </Link>
    </nav>
  );
};

export default Navigation;
