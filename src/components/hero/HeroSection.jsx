import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 🛠 추가: 페이지 이동용
import { useLanguage } from "../../context/useLanguage";
import "./HeroSection.css";

const heroText = {
  ko: {
    eyebrow: "AI · 데이터 · 업무 자동화",

    /* 🛠 원하는 줄바꿈 위치를 위해 <br /> 사용 */
    title: (
      <>
        운영을 개선하는
        <br />
        데이터 기반 시스템을
        <br />
        만듭니다.
      </>
    ),

    description: (
      <>
        AI 모델 실험, 데이터 분석, 실제 서비스 운영 경험을 연결해
        <br />더 신뢰도 높고 효율적인 디지털 워크플로우를 설계합니다.
      </>
    ),

    primary: "프로젝트 보기",
    secondary: "경험 살펴보기",
  },

  en: {
    eyebrow: "AI · DATA · WORKFLOW AUTOMATION",

    /* 🛠 영어 버전 줄바꿈 직접 제어 */
    title: (
      <>
        Building data-driven
        <br />
        systems that improve
        <br />
        operations.
      </>
    ),

    description: (
      <>
        I connect AI experimentation, data analytics,
        <br />
        and real-world service operations
        <br />
        to create reliable and efficient digital workflows.
      </>
    ),

    primary: "View Projects",
    secondary: "Explore Experience",
  },
};

function HeroSection() {
  const { language } = useLanguage();
  const text = heroText[language];

  return (
    <section
      className={`hero-section ${language === "ko" ? "hero-ko" : "hero-en"}`}
    >
      {/* 🛠 배경 그리드 */}
      <div className="hero-grid" />

      {/* 🛠 우측 하단 큰 텍스트 */}
      <div className="hero-background-word">PORTFOLIO</div>

      {/* 🛠 메인 콘텐츠 */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 상단 작은 텍스트 */}
        <p className="hero-eyebrow">{text.eyebrow}</p>

        {/* 메인 타이틀 */}
        <h1 className="hero-title">{text.title}</h1>

        {/* 설명 */}
        <p className="hero-description">{text.description}</p>

        {/* 버튼 영역 */}
        <div className="hero-buttons">
          {/* 🛠 프로젝트 페이지로 이동 */}
          <Link to="/projects" className="primary-btn">
            {text.primary}
          </Link>

          {/* 🛠 Experience 섹션으로 스크롤 */}
          <a href="#experience" className="secondary-btn">
            {text.secondary}
          </a>
        </div>

        {/* 하단 작은 텍스트 */}
        <p className="hero-bottom-text">{text.bottom}</p>
      </motion.div>
    </section>
  );
}

export default HeroSection;
