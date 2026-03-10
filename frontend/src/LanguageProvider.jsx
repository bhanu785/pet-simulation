import { useState } from "react";
import LanguageContext from "./LanguageContext";
import translations from "./translation";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    return translations?.[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}