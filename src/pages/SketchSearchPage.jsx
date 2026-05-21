import "./SketchSearchPage.css";
import { useLanguage } from "../context/useLanguage";

function SketchSearchPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "CNN / Object Detection",

      title: <>Sketch Search AI</>,

      subtitle: (
        <>
          디자이너를 위한
          <br />
          일러스트 검색 AI
        </>
      ),

      description: (
        <>
          디자이너가 스케치 형태의 일러스트레이션 영상을 효과적으로 검색할 수
          있도록, 전이학습 없이 CNN 기반 분류 모델을 직접 구현하고 데이터 품질
          개선 중심의 전처리 방법론을 적용한 프로젝트입니다.
        </>
      ),

      overview: {
        award: "2022 Data Creator Camp",
        organization: "과학기술정보통신부 · NIA",
        published: "2022.11",
        result: "F1-score 0.59",
      },

      problem: [
        "일러스트레이션 데이터셋 내부에 실사 이미지와 중복 이미지가 혼합되어 있어 모델 학습 품질 저하 문제가 존재했습니다.",

        "스케치 기반 영상 검색이라는 특성상 선 형태 및 스타일 특징을 안정적으로 분류할 수 있는 구조가 필요했습니다.",

        "전이학습 없이 CNN 구조를 직접 설계해야 했기 때문에 데이터 품질 관리와 모델 구조 최적화가 핵심 과제가 되었습니다.",
      ],

      solution: [
        "EDA 기반 데이터 분석을 통해 실사 이미지 및 중복 데이터 포함 문제를 정의했습니다.",

        "MD5 Hash 기반 중복 제거 알고리즘과 Object Detection 기반 필터링을 적용하여 데이터 품질을 개선했습니다.",

        "CNN 적층 구조를 직접 설계하고 하이퍼파라미터 최적화를 반복 수행하며 모델 성능을 개선했습니다.",
      ],

      features: [
        {
          title: "EDA Analysis",
          desc: "데이터 품질 및 분포 분석",
        },

        {
          title: "MD5 Deduplication",
          desc: "Hash 기반 중복 이미지 제거",
        },

        {
          title: "Object Detection",
          desc: "실사 이미지 자동 필터링",
        },

        {
          title: "CNN Modeling",
          desc: "전이학습 없이 CNN 직접 구현",
        },

        {
          title: "Hyperparameter Tuning",
          desc: "모델 성능 최적화 실험 반복",
        },

        {
          title: "Data Quality Strategy",
          desc: "데이터 정제 기반 성능 개선",
        },
      ],

      impact: [
        "데이터 품질 문제가 실제 모델 성능에 미치는 영향을 정량적으로 분석할 수 있었습니다.",

        "실사 이미지 제거 및 중복 제거 전략이 분류 성능 향상에 효과적임을 확인했습니다.",

        "한국지능정보사회진흥원장상(우수상)을 수상하며 데이터 중심 AI 문제 해결 역량을 인정받았습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "CNN / Object Detection",

      title: <>Sketch Search AI</>,

      subtitle: (
        <>
          Illustration search AI
          <br />
          for designers
        </>
      ),

      description: (
        <>
          Developed a CNN-based illustration search AI enabling designers to
          efficiently search sketch-style illustration videos, while applying
          data-quality-oriented preprocessing strategies without transfer
          learning.
        </>
      ),

      overview: {
        award: "2022 Data Creator Camp",
        organization: "MSIT · NIA",
        published: "2022.11",
        result: "F1-score 0.59",
      },

      problem: [
        "The dataset contained duplicated images and real-world photographs that negatively affected model learning quality.",

        "Sketch-style illustration search required stable classification of subtle line and style features.",

        "Since transfer learning was not allowed, direct CNN architecture design and data quality optimization became critical tasks.",
      ],

      solution: [
        "Performed EDA-based analysis to identify duplicated and real-image contamination issues.",

        "Applied MD5 Hash-based duplicate removal and Object Detection-based filtering pipelines.",

        "Designed CNN stacking structures manually and optimized hyperparameters through repeated experiments.",
      ],

      features: [
        {
          title: "EDA Analysis",
          desc: "Dataset quality and distribution analysis",
        },

        {
          title: "MD5 Deduplication",
          desc: "Hash-based duplicate image removal",
        },

        {
          title: "Object Detection",
          desc: "Automatic real-image filtering",
        },

        {
          title: "CNN Modeling",
          desc: "CNN architecture built from scratch",
        },

        {
          title: "Hyperparameter Tuning",
          desc: "Repeated optimization experiments",
        },

        {
          title: "Data Quality Strategy",
          desc: "Performance improvement via preprocessing",
        },
      ],

      impact: [
        "Quantitatively analyzed how dataset quality directly affects model performance.",

        "Validated the effectiveness of duplicate removal and real-image filtering strategies.",

        "Received the NIA Excellence Award for data-driven AI problem solving.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`sketch-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="sketch-hero">
        <span className="sketch-category">{t.category}</span>

        <h1 className="sketch-title">{t.title}</h1>

        <h2 className="sketch-subtitle">{t.subtitle}</h2>

        <p className="sketch-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="sketch-overview">
        <div className="overview-card">
          <span>Award</span>
          <h3>{t.overview.award}</h3>
        </div>

        <div className="overview-card">
          <span>Organization</span>
          <h3>{t.overview.organization}</h3>
        </div>

        <div className="overview-card">
          <span>Published</span>
          <h3>{t.overview.published}</h3>
        </div>

        <div className="overview-card">
          <span>Result</span>
          <h3>{t.overview.result}</h3>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="sketch-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* SOLUTION */}

      <section className="sketch-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="sketch-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="sketch-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="sketch-stack">
        <span>Python</span>
        <span>CNN</span>
        <span>Object Detection</span>
        <span>EDA</span>
        <span>MD5 Hash</span>
        <span>Image Classification</span>
      </section>
    </main>
  );
}

export default SketchSearchPage;
