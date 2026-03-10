import { useContext } from "react";
import LanguageContext from "./LanguageContext.js";

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

export default useLanguage;