import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./LanguageProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);