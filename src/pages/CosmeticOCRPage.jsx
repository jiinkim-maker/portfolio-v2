import "./CosmeticOCRPage.css";
import { useLanguage } from "../context/useLanguage";

function CosmeticOCRPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "OCR / RCNN",

      title: <>Cosmetic OCR AI</>,

      subtitle: (
        <>
          시각장애인을 위한
          <br />
          화장품 패키징 OCR
        </>
      ),

      description: (
        <>
          시각장애인이 화장품을 식별하고 유해 성분을 확인할 수 있도록, 화장품
          패키징 텍스트를 인식하는 AI 기반 OCR 시스템을 구현한 프로젝트입니다.
        </>
      ),

      overview: {
        type: "팀 프로젝트",
        organization: "한국외국어대학교",
        period: "2023.04 — 2023.06",
        result: "Accuracy 70.06 · 클래스 프로젝트 1위",
      },

      problem: [
        "화장품 패키징은 다양한 폰트와 곡면 구조를 포함하고 있어 일반 OCR 환경보다 텍스트 인식 난이도가 높았습니다.",

        "성분 정보 및 제품명을 정확히 추출하여 시각장애인 사용자에게 전달할 수 있는 AI 기반 OCR 시스템이 필요했습니다.",

        "OCR 데이터셋의 구조를 모델 학습 목적에 맞게 재가공하고 전처리하는 데이터 파이프라인 구축이 핵심 과제가 되었습니다.",
      ],

      solution: [
        "AI Hub 패키징 OCR 데이터(Image:JSON)를 활용하여 EDA 및 데이터 구조 분석을 수행했습니다.",

        "JSON 원천 파일에서 Bounding Box 및 레이블 정보를 추출하고 Text 단위 Crop 및 표준화를 진행했습니다.",

        "CNN 기반 특징 추출과 LSTM 기반 시퀀스 처리를 결합한 CRNN 구조를 구현하고 최적 파라미터 실험을 수행했습니다.",
      ],

      features: [
        {
          title: "OCR Pipeline",
          desc: "패키징 OCR 데이터 파이프라인 구축",
        },

        {
          title: "BBox Extraction",
          desc: "JSON 기반 Bounding Box 추출",
        },

        {
          title: "Text Cropping",
          desc: "Text 단위 이미지 Crop 및 표준화",
        },

        {
          title: "CRNN Modeling",
          desc: "CNN + LSTM 기반 OCR 구조 구현",
        },

        {
          title: "Parameter Optimization",
          desc: "최적 파라미터 실험 및 성능 개선",
        },

        {
          title: "Accessibility AI",
          desc: "시각장애인 대상 접근성 중심 AI",
        },
      ],

      impact: [
        "화장품 패키징 환경에서도 OCR 기반 텍스트 인식 가능성을 검증했습니다.",

        "데이터 전처리 및 Text 단위 Crop 전략이 OCR 성능 향상에 효과적임을 확인했습니다.",

        "Accuracy 70.06%를 달성하고 클래스 프로젝트 1위를 기록했습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "OCR / RCNN",

      title: <>Cosmetic OCR AI</>,

      subtitle: (
        <>
          Cosmetic packaging OCR
          <br />
          for visually impaired users
        </>
      ),

      description: (
        <>
          Developed an AI-based OCR system that recognizes cosmetic packaging
          text to help visually impaired users identify products and harmful
          ingredients.
        </>
      ),

      overview: {
        type: "Team Project",
        organization: "Hankuk University of Foreign Studies",
        period: "2023.04 — 2023.06",
        result: "Accuracy 70.06 · Ranked #1",
      },

      problem: [
        "Cosmetic packaging contains curved surfaces and diverse font styles, making OCR recognition significantly difficult.",

        "An AI system capable of accurately extracting ingredient and product information was required for accessibility support.",

        "Building an OCR-focused preprocessing pipeline from raw annotation data became a major technical challenge.",
      ],

      solution: [
        "Performed EDA and structural analysis using AI Hub packaging OCR datasets (Image:JSON).",

        "Extracted Bounding Box and label information from JSON files and performed text-level cropping and normalization.",

        "Implemented a CRNN architecture combining CNN feature extraction and LSTM sequence modeling.",
      ],

      features: [
        {
          title: "OCR Pipeline",
          desc: "Packaging OCR preprocessing pipeline",
        },

        {
          title: "BBox Extraction",
          desc: "JSON-based bounding box extraction",
        },

        {
          title: "Text Cropping",
          desc: "Text-level image cropping",
        },

        {
          title: "CRNN Modeling",
          desc: "CNN + LSTM OCR architecture",
        },

        {
          title: "Parameter Optimization",
          desc: "Performance tuning experiments",
        },

        {
          title: "Accessibility AI",
          desc: "AI for visually impaired users",
        },
      ],

      impact: [
        "Validated OCR feasibility in complex cosmetic packaging environments.",

        "Confirmed that preprocessing and text-level cropping significantly improved OCR performance.",

        "Achieved 70.06% accuracy and ranked first in the class project evaluation.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`ocr-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="ocr-hero">
        <span className="ocr-category">{t.category}</span>

        <h1 className="ocr-title">{t.title}</h1>

        <h2 className="ocr-subtitle">{t.subtitle}</h2>

        <p className="ocr-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="ocr-overview">
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

      <section className="ocr-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* SOLUTION */}

      <section className="ocr-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="ocr-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="ocr-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="ocr-stack">
        <span>OCR</span>
        <span>RCNN</span>
        <span>CRNN</span>
        <span>CNN</span>
        <span>LSTM</span>
        <span>Accessibility AI</span>
      </section>
    </main>
  );
}

export default CosmeticOCRPage;
