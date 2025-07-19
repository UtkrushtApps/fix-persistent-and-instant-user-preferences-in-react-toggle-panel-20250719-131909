import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./Dashboard";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(<Dashboard />);
