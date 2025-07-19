import React, { useState, useEffect } from "react";

function AccessibleToggle({
  id,
  label,
  checked,
  onChange,
  description,
}) {
  return (
    <div style={{ margin: "16px 0" }}>
      <label htmlFor={id} style={{ fontWeight: 500, fontSize: "1.05em" }}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          style={{ marginRight: 10, accentColor: "#3E65FF", width: 20, height: 20 }}
          aria-checked={checked}
          aria-describedby={description ? id + "-desc" : undefined}
        />
        {label}
      </label>
      {description && (
        <div
          id={id + "-desc"}
          style={{ fontSize: "0.95em", color: "#666", marginLeft: 30 }}
        >
          {description}
        </div>
      )}
    </div>
  );
}

export default function PreferencesPanel({ darkMode, setDarkMode }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const storedNotifications = window.localStorage.getItem(
      "dashboard_notifications"
    );
    if (storedNotifications === "true") {
      setNotificationsEnabled(true);
    } else {
      setNotificationsEnabled(false);
    }
    // darkMode preference handled by parent (Dashboard)
  }, []);

  // Persist notificationsEnabled
  useEffect(() => {
    window.localStorage.setItem(
      "dashboard_notifications",
      notificationsEnabled ? "true" : "false"
    );
  }, [notificationsEnabled]);

  // Persist darkMode on change
  useEffect(() => {
    window.localStorage.setItem(
      "dashboard_dark_mode",
      darkMode ? "true" : "false"
    );
  }, [darkMode]);

  return (
    <aside
      aria-label="Preferences Panel"
      style={{
        border: "1.5px solid #bfc5d2",
        borderRadius: 8,
        padding: 24,
        marginBottom: 32,
        maxWidth: 420,
        background: darkMode ? "#252b35" : "#fff",
        color: darkMode ? "#e8e8e8" : "#222",
        boxShadow: darkMode
          ? "0 2px 8px 0 rgba(18,19,22,0.13)"
          : "0 2px 8px 0 rgba(190,196,211,0.16)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Preferences</h2>
      <AccessibleToggle
        id="enable-notifications"
        label="Enable Notifications"
        checked={notificationsEnabled}
        onChange={setNotificationsEnabled}
        description="Turn on to receive updates and reminders."
      />
      <AccessibleToggle
        id="dark-mode"
        label="Dark Mode"
        checked={darkMode}
        onChange={setDarkMode}
        description="Use a visually comfortable dark theme for low-light environments."
      />
    </aside>
  );
}
