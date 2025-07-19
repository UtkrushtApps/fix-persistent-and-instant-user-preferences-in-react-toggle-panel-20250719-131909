import React, { useState, useEffect } from "react";
import PreferencesPanel from "./PreferencesPanel";

const DASHBOARD_STYLE = {
  minHeight: "100vh",
  padding: "40px",
  transition: "background 0.2s",
};

export default function Dashboard() {
  // Reflect dark mode for immediate dashboard background update
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize from localStorage (default: off)
    const stored = window.localStorage.getItem("dashboard_dark_mode");
    if (stored === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Ensure background color matches darkMode instantly
  useEffect(() => {
    document.body.style.background = darkMode ? "#181b20" : "#f5f7fa";
    document.body.style.color = darkMode ? "#eee" : "#111";
    return () => {
      // Clean up body styles on unmount
      document.body.style.background = null;
      document.body.style.color = null;
    };
  }, [darkMode]);

  // Pass darkMode and setter to PreferencesPanel for instant updates
  return (
    <div
      style={{
        ...DASHBOARD_STYLE,
        background: darkMode ? "#181b20" : "#f5f7fa",
        color: darkMode ? "#eee" : "#111",
      }}
      aria-label="Dashboard main section"
    >
      <h1 style={{ fontWeight: 700 }}>Welcome to Your Dashboard</h1>
      <PreferencesPanel darkMode={darkMode} setDarkMode={setDarkMode} />
      <section style={{ marginTop: 40 }}>
        <p>Your content goes here.</p>
      </section>
    </div>
  );
}
