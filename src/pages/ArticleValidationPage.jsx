import "./ArticleValidationPage.css";
import { useLanguage } from "../context/useLanguage";

function ArticleValidationPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      label: "Automation Tool",

      title: (
        <>
          기사 발행 검수
          <br />
          자동화 툴
        </>
      ),

      description: (
        <>
          뉴스룸 기사 발행 이후 수신되는 웹발신 문자를 자동 수집하고, 내부
          데이터베이스와 비교하여 누락·중복·오발행 여부를 검수할 수 있도록
          설계한 운영 자동화 시스템입니다.
        </>
      ),

      overview: {
        role: "Planning · Full Development",
        company: "Cheil Worldwide",
        client: "Samsung Newsroom Global",
        period: "2025",
      },

      problem: [
        "글로벌 뉴스룸 운영 과정에서는 발행된 기사와 실제 발송된 웹발신 메시지를 비교하며 누락 여부를 수작업으로 검수해야 했습니다.",

        "특히 여러 국가 법인에서 동시에 콘텐츠가 발행될 경우, 운영자가 기사 URL과 발행 이력을 하나씩 직접 비교해야 했기 때문에 반복적인 운영 피로도가 높았습니다.",

        "또한 중복 발송·누락 발행·오발행 여부를 빠르게 파악하기 어려워 운영 안정성 확보에 한계가 있었습니다.",
      ],

      solution: [
        "운영 검수 효율을 높이기 위해 안드로이드 기반 문자 수집 앱과 웹 검수 플랫폼을 연동한 자동화 구조를 설계했습니다.",

        "앱에서는 웹발신 문자를 특정 포맷으로 정규화하여 저장하고, 웹 플랫폼에서는 해당 데이터를 내부 기사 DB와 자동 비교할 수 있도록 구현했습니다.",

        "이를 통해 발행 누락·중복·오류 여부를 자동 식별하고 운영자가 즉시 검수 결과를 확인할 수 있도록 구성했습니다.",
      ],

      features: [
        {
          title: "SMS Collection",
          desc: "웹발신 문자 자동 수집 및 정규화",
        },

        {
          title: "DB Validation",
          desc: "기사 DB 기반 자동 비교 검수",
        },

        {
          title: "Duplicate Detection",
          desc: "중복 발행 및 오발행 자동 탐지",
        },

        {
          title: "Missing Detection",
          desc: "누락 기사 자동 식별",
        },

        {
          title: "Operational Dashboard",
          desc: "검수 결과 실시간 시각화",
        },

        {
          title: "Workflow Automation",
          desc: "반복 운영 검수 프로세스 자동화",
        },
      ],

      impact: [
        "기존 수작업 기반 검수 프로세스를 자동화함으로써 운영 검수 시간을 크게 단축할 수 있었습니다.",

        "또한 운영자가 반복적으로 URL과 발행 이력을 비교하던 업무를 자동화하여 운영 피로도를 줄이고 검수 정확도를 향상시킬 수 있었습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      label: "Automation Tool",

      title: (
        <>
          Article Publishing
          <br />
          Validation Tool
        </>
      ),

      description: (
        <>
          Designed an operational automation tool that collects publishing SMS
          alerts, compares them with internal newsroom databases, and
          automatically validates missing, duplicated, or incorrect publishing
          records.
        </>
      ),

      overview: {
        role: "Planning · Full Development",
        company: "Cheil Worldwide",
        client: "Samsung Newsroom Global",
        period: "2025",
      },

      problem: [
        "Global newsroom operations required manual comparison between published articles and outgoing publishing SMS alerts.",

        "When multiple legal entities published content simultaneously, operators had to manually compare article URLs and publishing records one by one.",

        "This made it difficult to quickly identify duplicate publishing, missing content, or operational errors.",
      ],

      solution: [
        "To improve operational validation efficiency, I designed an automation workflow connecting an Android-based SMS collection app with a web validation platform.",

        "The mobile app normalized incoming SMS alerts into structured formats, while the web platform automatically compared them against internal newsroom databases.",

        "This enabled automatic identification of missing, duplicated, or incorrect publishing records in real time.",
      ],

      features: [
        {
          title: "SMS Collection",
          desc: "Automatic SMS collection and normalization",
        },

        {
          title: "DB Validation",
          desc: "Database-based automated validation",
        },

        {
          title: "Duplicate Detection",
          desc: "Detecting duplicated publishing records",
        },

        {
          title: "Missing Detection",
          desc: "Automatically identifying missing articles",
        },

        {
          title: "Operational Dashboard",
          desc: "Real-time validation result visualization",
        },

        {
          title: "Workflow Automation",
          desc: "Automating repetitive operational workflows",
        },
      ],

      impact: [
        "The automation workflow significantly reduced manual validation time across newsroom operations.",

        "It also improved operational accuracy and reduced repetitive workload by automating URL and publishing record comparisons.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main
      className={`validation-page ${language === "ko" ? "is-ko" : "is-en"}`}
    >
      {/* HERO */}

      <section className="validation-hero">
        <span className="validation-label">{t.label}</span>

        <h1 className="validation-title">{t.title}</h1>

        <p className="validation-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="validation-overview">
        <div className="overview-card">
          <span>Role</span>
          <h3>{t.overview.role}</h3>
        </div>

        <div className="overview-card">
          <span>Company</span>
          <h3>{t.overview.company}</h3>
        </div>

        <div className="overview-card">
          <span>Client</span>
          <h3>{t.overview.client}</h3>
        </div>

        <div className="overview-card">
          <span>Period</span>
          <h3>{t.overview.period}</h3>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="validation-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* IMAGE */}

      <section className="validation-image-section">
        <img
          src="/images/article-validation-dashboard.jpg"
          alt="Article Validation Tool"
        />
      </section>

      {/* SOLUTION */}

      <section className="validation-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="validation-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="validation-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="validation-stack">
        <span>React</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>Flask</span>
        <span>Android Studio</span>
        <span>SQLite</span>
        <span>HTML/CSS</span>
      </section>
    </main>
  );
}

export default ArticleValidationPage;
