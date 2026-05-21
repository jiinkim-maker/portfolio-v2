import "./NewsroomMonitoringPage.css";
import { useLanguage } from "../context/useLanguage";

function NewsroomMonitoringPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      label: "Global Operations Platform",

      title: (
        <>
          글로벌 뉴스룸
          <br />
          운영 통합 모니터링 플랫폼
        </>
      ),

      description: (
        <>
          글로벌 뉴스룸 환경에서 발생하는 콘텐츠 검수·브랜딩 관리·미디어
          모니터링 업무를 하나의 플랫폼에서 통합 관리할 수 있도록 설계한 운영
          시스템입니다.
        </>
      ),

      overview: {
        role: "Planning · Platform Design",
        company: "Cheil Worldwide",
        client: "Samsung Newsroom Global",
        period: "2025 — Present",
      },

      problem: [
        "삼성전자 글로벌 뉴스룸은 여러 국가 법인이 동시에 운영되는 구조로, 다양한 기사와 콘텐츠가 실시간으로 발행됩니다.",

        "운영 과정에서는 기사 내부 금지어 및 필수어 검수, KV·배너 브랜딩 검토, 공식 미디어 사용 여부 확인 등 다양한 운영 검수 작업이 동시에 발생합니다.",

        "특히 글로벌 캠페인 기간에는 다수의 국가에서 여러 콘텐츠가 동시에 확산되기 때문에 운영 상태와 브랜드 가이드라인 준수 여부를 빠르게 파악하는 것이 중요했습니다.",
      ],

      solution: [
        "운영 검수 업무를 통합 관리하기 위해 글로벌 뉴스룸 운영 플랫폼 구조를 설계했습니다.",

        "플랫폼에서는 기사 내 금지어 및 필수어 자동 검출, 브랜드 가이드라인 위반 여부 확인, KV 및 배너 운영 상태 관리, 미디어 검수 등을 하나의 흐름 안에서 관리할 수 있도록 구성했습니다.",

        "또한 이미지·GIF·MP4·임베드 콘텐츠가 공식 미디어 자료를 사용했는지와 발행 가이드라인을 준수했는지를 실시간으로 모니터링할 수 있도록 설계했습니다.",
      ],

      features: [
        {
          title: "Keyword Inspection",
          desc: "기사 내 금지어 및 필수어 자동 검출",
        },

        {
          title: "KV & Banner Validation",
          desc: "KV·배너 브랜딩 가이드라인 검수",
        },

        {
          title: "Competitor Detection",
          desc: "경쟁사 제품 및 정책 위반 요소 확인",
        },

        {
          title: "Media Monitoring",
          desc: "이미지·GIF·MP4·임베드 콘텐츠 검수",
        },

        {
          title: "Official Asset Validation",
          desc: "공식 미디어 자료 사용 여부 확인",
        },

        {
          title: "Publishing Guideline Check",
          desc: "발행 가이드라인 준수 여부 모니터링",
        },
      ],

      impact: [
        "운영 검수와 브랜드 모니터링 업무를 하나의 플랫폼에서 통합 관리할 수 있게 되면서 운영 효율성과 글로벌 운영 일관성을 동시에 개선할 수 있었습니다.",

        "특히 여러 국가에서 동시에 발행되는 콘텐츠를 실시간으로 추적할 수 있게 되면서 운영 이슈 대응 속도와 브랜드 리스크 관리 효율이 향상되었습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      label: "Global Operations Platform",

      title: (
        <>
          Global Newsroom
          <br />
          Monitoring Platform
        </>
      ),

      description: (
        <>
          Designed an integrated operations platform for newsroom monitoring,
          branding validation, and media inspection workflows across Samsung
          global newsroom environments.
        </>
      ),

      overview: {
        role: "Planning · Platform Design",
        company: "Cheil Worldwide",
        client: "Samsung Newsroom Global",
        period: "2025 — Present",
      },

      problem: [
        "Samsung operates global newsroom platforms across multiple countries where articles and multimedia content are published simultaneously.",

        "Operational workflows included keyword inspection, KV/banner validation, media guideline checks, and verification of official media asset usage.",

        "During large-scale global campaigns, multiple countries distributed content simultaneously, making real-time operational visibility and branding consistency increasingly important.",
      ],

      solution: [
        "To streamline newsroom operational workflows, I designed an integrated monitoring platform structure.",

        "The platform centralized keyword validation, branding guideline inspection, KV/banner management, and media monitoring into a unified operational dashboard.",

        "It also monitored whether images, GIFs, MP4 files, and embedded media used official assets while complying with publishing guidelines.",
      ],

      features: [
        {
          title: "Keyword Inspection",
          desc: "Automatic forbidden and required keyword validation",
        },

        {
          title: "KV & Banner Validation",
          desc: "Branding guideline inspection for KV and banners",
        },

        {
          title: "Competitor Detection",
          desc: "Detecting competitor products and policy violations",
        },

        {
          title: "Media Monitoring",
          desc: "Inspecting images, GIFs, MP4s, and embedded media",
        },

        {
          title: "Official Asset Validation",
          desc: "Verifying official media asset usage",
        },

        {
          title: "Publishing Guideline Check",
          desc: "Monitoring publishing guideline compliance",
        },
      ],

      impact: [
        "The platform centralized newsroom operational monitoring and branding validation workflows into a unified environment.",

        "It improved operational visibility and branding risk management by enabling real-time monitoring across multiple global regions.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main
      className={`monitoring-page ${language === "ko" ? "is-ko" : "is-en"}`}
    >
      {/* =========================================================
         HERO
      ========================================================= */}

      <section className="monitoring-hero">
        <span className="monitoring-label">{t.label}</span>

        <h1 className="monitoring-title">{t.title}</h1>

        <p className="monitoring-description">{t.description}</p>
      </section>

      {/* =========================================================
         OVERVIEW
      ========================================================= */}

      <section className="monitoring-overview">
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

      {/* =========================================================
         PROBLEM
      ========================================================= */}

      <section className="monitoring-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* =========================================================
         IMAGE
      ========================================================= */}

      <section className="monitoring-image-section">
        <img
          src="/images/platform_intro.png"
          alt="Newsroom Monitoring Platform"
        />
      </section>

      {/* =========================================================
         SOLUTION
      ========================================================= */}

      <section className="monitoring-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* =========================================================
         FEATURES
      ========================================================= */}

      <section className="monitoring-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* =========================================================
         IMPACT
      ========================================================= */}

      <section className="monitoring-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* =========================================================
         STACK
      ========================================================= */}

      <section className="monitoring-stack">
        <span>React</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>Flask</span>
        <span>SQLite</span>
        <span>HTML/CSS</span>
        <span>Node.js</span>
      </section>
    </main>
  );
}

export default NewsroomMonitoringPage;
