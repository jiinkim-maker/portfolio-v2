import { motion } from "framer-motion";
import { useLanguage } from "../../context/useLanguage";
import "./AboutSection.css";

/* 🛠 언어별 About 섹션 텍스트 데이터 */
const aboutText = {
  en: {
    label: "About",

    titleLines: [
      "I connect data, AI,",
      "and operations into systems",
      "that actually work.",
    ],

    adventureTitle: "Recent adventures",

    adventures: [
      {
        role: "SAMSUNG PR Platform Operations",
        company: "Cheil Worldwide",
        period: "2025 — Present",
      },

      {
        role: "B2B Healthcare AI Service Support",
        company: "Wellysis",
        period: "2023",
      },
      {
        role: "Biomedical Engineering Major, Business Administration Minor",
        company: "Hankuk University of Foreign Studies",
        period: "2020 — 2025",
      },
    ],

    descriptionLines: [
      "My strength lies in connecting technical experimentation with real-world operations.",
      "From data analysis and AI model development to platform operations",
      "and workflow automation tools, I have improved operational efficiency",
      "and data reliability across service environments.",
    ],

    cards: [
      {
        title: "AI & Data",
        textLines: [
          "Experienced in multiple ML/DL projects,",
          "data preprocessing, EDA,",
          "model optimization, and performance analysis.",
        ],
      },
      {
        title: "Operations",
        textLines: [
          "Experienced in global PR platform operations,",
          "B2B healthcare AI diagnostic service support,",
          "data quality management, and business reporting.",
        ],
      },
      {
        title: "Automation",
        textLines: [
          "Designed and implemented automation tools",
          "to reduce repetitive verification and operations tasks",
          "and improve process reliability.",
        ],
      },
    ],
  },

  ko: {
    label: "소개",

    /* 🛠 수정: Jinny가 요청한 한글 타이틀 반영 */
    titleLines: [
      "데이터, AI, 운영을",
      "실제 작동하는 시스템으로",
      "연결합니다.",
    ],

    adventureTitle: "Recent adventures",

    adventures: [
      {
        role: "삼성전자 법인 뉴스룸 플랫폼 운영 지원",
        company: "제일기획",
        period: "2025 — 현재",
      },

      {
        role: "B2B 헬스케어 AI 진단 서비스 지원",
        company: "웰리시스",
        period: "2023",
      },
      {
        role: "바이오메디컬공학 전공, 경영학 부전공",
        company: "한국외국어대학교",
        period: "2020 — 2025",
      },
    ],

    /* 🛠 수정: Jinny가 요청한 설명 문구 반영 */
    descriptionLines: [
      "저의 강점은 기술 실험과 실제 운영 환경을 연결하는 데 있습니다.",
      "데이터 분석과 AI 개발부터, 플랫폼 운영과 업무 자동화 시스템 구현까지",
      "운영 효율과 데이터 신뢰도를 높여왔습니다.",
    ],

    /* 🛠 수정: Jinny가 요청한 카드 문구 반영 */
    cards: [
      {
        title: "AI & Data",
        textLines: [
          "다수의 ML & DL 프로젝트 경험을 보유하고 있습니다.",
          "(데이터 전처리 > 성능 분석 > 모델 최적화)",
        ],
      },
      {
        title: "Operations",
        textLines: [
          "글로벌 PR 플랫폼 운영, B2B 헬스케어 AI 진단 서비스 지원 경험을 보유하고 있습니다.",
        ],
      },
      {
        title: "Automation",
        textLines: [
          "반복적인 검수 및 운영 업무를 줄이고, 프로세스 신뢰도를 높이기 위한 업무 자동화 도구를 설계하고 구현했습니다.",
        ],
      },
    ],
  },
};

function AboutSection() {
  const { language } = useLanguage();
  const text = aboutText[language];

  return (
    <section
      className={`about-section ${language === "ko" ? "is-ko" : "is-en"}`}
      id="about"
    >
      <motion.div
        className="about-inner"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="about-label">{text.label}</p>

        <h2 className="about-title">
          {text.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        {/* 🛠 Recent Adventures 요약표 */}
        <div className="adventures-block">
          <div className="adventures-heading">
            <span className="adventures-icon">✦</span>
            <h3>{text.adventureTitle}</h3>
          </div>

          <div className="adventures-list">
            {text.adventures.map((item) => (
              <div
                className="adventure-row"
                key={`${item.role}-${item.period}`}
              >
                <div className="adventure-role">{item.role}</div>
                <div className="adventure-company">{item.company}</div>
                <div className="adventure-period">{item.period}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="about-description">
          {text.descriptionLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <div className="about-cards">
          {text.cards.map((card) => (
            <article className="about-card" key={card.title}>
              <h3>{card.title}</h3>

              <p>
                {card.textLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
