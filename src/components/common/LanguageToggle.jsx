import { useLanguage } from "../../context/useLanguage";
import "./LanguageToggle.css";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="global-language-toggle" onClick={toggleLanguage}>
      <span className={language === "ko" ? "active" : ""}>KR</span>
      <span>/</span>
      <span className={language === "en" ? "active" : ""}>EN</span>
    </button>
  );
}

export default LanguageToggle;
