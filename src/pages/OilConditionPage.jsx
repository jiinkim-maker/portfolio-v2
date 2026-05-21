import "./OilConditionPage.css";
import { useLanguage } from "../context/useLanguage";

function OilConditionPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "Random Forest",

      title: <>Oil Condition AI</>,

      subtitle: (
        <>
          건설 장비 작동유 상태
          <br />
          진단 모델
        </>
      ),

      description: (
        <>
          건설 현장에서의 중장비 안전사고를 예방하기 위해, 센서 데이터를
          기반으로 한 AI 예측 서비스를 기획하고 Binary Classification 기반
          Random Forest 모델을 구현한 프로젝트입니다.
        </>
      ),

      overview: {
        type: "팀 프로젝트",
        organization: "한국외국어대학교 AI교육원 · Dacon",
        period: "2023.09",
        result: "Accuracy 82.346",
      },

      problem: [
        "건설 현장의 장비 이상 여부를 사람이 직접 판단해야 하는 운영 구조로 인해 사고 위험성과 관리 비용 문제가 존재했습니다.",

        "센서 기반 장비 데이터를 활용하여 작동유 상태를 조기에 진단하고 위험도를 예측할 수 있는 AI 모델이 필요했습니다.",

        "실제 현장 환경을 반영하기 위해 데이터 전처리 및 Feature Selection 기반 모델 최적화가 핵심 과제가 되었습니다.",
      ],

      solution: [
        "Binary Classification 기반 Random Forest 모델을 구현하여 장비 상태를 정상/이상으로 분류했습니다.",

        "Label Encoding 및 Feature Selection을 수행하여 모델 입력 데이터 품질을 개선했습니다.",

        "중앙 서버 기반 3D 시뮬레이션 형태의 AI 서비스 흐름을 기획하여 장비 상태 위험도를 시각적으로 전달하도록 설계했습니다.",
      ],

      features: [
        {
          title: "Random Forest",
          desc: "Binary Classification 기반 상태 진단",
        },

        {
          title: "Feature Selection",
          desc: "중요 변수 기반 모델 최적화",
        },

        {
          title: "Label Encoding",
          desc: "센서 데이터 전처리 수행",
        },

        {
          title: "Risk Prediction",
          desc: "장비 상태 위험도 예측",
        },

        {
          title: "3D Simulation",
          desc: "시각 기반 운영 시뮬레이션 기획",
        },

        {
          title: "AI Service Planning",
          desc: "현장 운영 중심 AI 서비스 설계",
        },
      ],

      impact: [
        "센서 기반 데이터를 활용하여 건설 장비 상태를 정량적으로 예측할 수 있는 가능성을 확인했습니다.",

        "Feature Selection 기반 전처리가 모델 성능 향상에 효과적임을 검증했습니다.",

        "해커톤 본선 진출 및 수상(상위 10위 이내)을 기록하며 AI 서비스 기획 및 모델 구현 역량을 인정받았습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "Random Forest",

      title: <>Oil Condition AI</>,

      subtitle: (
        <>
          Operational oil condition
          <br />
          diagnosis model
        </>
      ),

      description: (
        <>
          Developed a sensor-based AI prediction system for heavy equipment
          operational safety, including Random Forest binary classification
          modeling and AI service planning for construction environments.
        </>
      ),

      overview: {
        type: "Team Project",
        organization: "HUFS AI Institute · Dacon",
        period: "2023.09",
        result: "Accuracy 82.346",
      },

      problem: [
        "Heavy equipment maintenance relied heavily on manual 판단 and operational monitoring processes.",

        "An AI-based predictive system was needed to diagnose oil condition and estimate equipment risk in advance.",

        "Feature engineering and preprocessing became critical tasks for reflecting real-world operational environments.",
      ],

      solution: [
        "Implemented a Random Forest binary classification model for normal/anomalous equipment diagnosis.",

        "Applied Label Encoding and Feature Selection to improve sensor data quality.",

        "Designed an AI service workflow visualizing operational risks through a central-server-based simulation concept.",
      ],

      features: [
        {
          title: "Random Forest",
          desc: "Binary classification diagnosis model",
        },

        {
          title: "Feature Selection",
          desc: "Important variable optimization",
        },

        {
          title: "Label Encoding",
          desc: "Sensor data preprocessing",
        },

        {
          title: "Risk Prediction",
          desc: "Equipment anomaly prediction",
        },

        {
          title: "3D Simulation",
          desc: "Operational visualization planning",
        },

        {
          title: "AI Service Planning",
          desc: "Field-oriented AI workflow design",
        },
      ],

      impact: [
        "Validated the feasibility of predictive maintenance using operational sensor data.",

        "Confirmed the effectiveness of preprocessing and feature selection strategies.",

        "Advanced to the final round and ranked within the top 10 teams in the hackathon competition.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`oil-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="oil-hero">
        <span className="oil-category">{t.category}</span>

        <h1 className="oil-title">{t.title}</h1>

        <h2 className="oil-subtitle">{t.subtitle}</h2>

        <p className="oil-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="oil-overview">
        <div className="overview-card">
          <span>Type</span>
          <h3>{t.overview.type}</h3>
        </div>

        <div className="overview-card">
          <span>Organization</span>
          <h3>{t.overview.organization}</h3>
        </div>

        <div className="overview-card">
          <span>Period</span>
          <h3>{t.overview.period}</h3>
        </div>

        <div className="overview-card">
          <span>Result</span>
          <h3>{t.overview.result}</h3>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="oil-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* SOLUTION */}

      <section className="oil-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="oil-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="oil-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="oil-stack">
        <span>Random Forest</span>
        <span>Feature Selection</span>
        <span>Label Encoding</span>
        <span>Binary Classification</span>
        <span>Sensor Data</span>
        <span>AI Service Planning</span>
      </section>
    </main>
  );
}

export default OilConditionPage;
