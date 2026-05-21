import "./WellysisPilotPage.css";
import { useLanguage } from "../context/useLanguage";

function WellysisPilotPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "Healthcare AI",

      title: (
        <>
          Cardiovascular AI
          <br />
          Pilot Operations
        </>
      ),

      subtitle: (
        <>
          AI 기반 심혈관 진단 서비스
          <br />
          시범사업 운영 지원
        </>
      ),

      description: (
        <>
          삼성전자 DS부문 임직원 대상 AI 기반 심혈관 진단 시범사업 운영을
          지원하며, 웨어러블 기기 데이터 전송 상태 모니터링, 결과 분석 및 운영
          리포트 제작을 수행한 프로젝트입니다.
        </>
      ),

      overview: {
        client: "삼성전자 DS 사업소",
        company: "Wellysis",
        role: "운영 지원 · 데이터 모니터링 · 리포트 제작",
        period: "2023.09 — 2023.12",
      },

      problem: [
        "시범사업 운영 과정에서 다수 참가자의 웨어러블 기기 데이터 전송 상태 및 수검 현황을 안정적으로 관리해야 했습니다.",

        "운영 과정에서 발생하는 데이터 누락 및 전송 오류를 빠르게 파악하고 대응할 필요가 있었습니다.",

        "프로그램 운영 결과를 정리하여 병원 및 유관 부서 대상 운영 리포트로 구조화해야 했습니다.",
      ],

      solution: [
        "참가자별 기기 데이터 전송 상태 및 수검 현황을 지속적으로 모니터링하며 운영 데이터를 관리했습니다.",

        "데이터 누락 및 이상 전송 이슈를 빠르게 확인하고 운영 대응 프로세스를 지원했습니다.",

        "수집된 데이터를 기반으로 운영 성과 분석 및 결과 리포트 제작을 지원했습니다.",
      ],

      features: [
        {
          title: "Healthcare Operations",
          desc: "AI 기반 진단 서비스 운영 지원",
        },

        {
          title: "Data Monitoring",
          desc: "웨어러블 데이터 전송 현황 관리",
        },

        {
          title: "Operational Reporting",
          desc: "운영 성과 및 결과 리포트 제작",
        },

        {
          title: "Issue Tracking",
          desc: "데이터 누락 및 이상 상태 대응",
        },

        {
          title: "Participant Management",
          desc: "참가자 수검 현황 모니터링",
        },

        {
          title: "Operational Stability",
          desc: "안정적인 시범사업 운영 지원",
        },
      ],

      impact: [
        "참가자 데이터 및 운영 현황을 체계적으로 관리하여 안정적인 시범사업 운영을 지원할 수 있었습니다.",

        "데이터 전송 및 수검 상태를 지속적으로 추적하며 운영 리스크를 최소화했습니다.",

        "운영 성과 분석 및 결과 리포트 제작을 통해 유관 병원 서비스 도입 논의 지원에 기여했습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "Healthcare AI",

      title: (
        <>
          Cardiovascular AI
          <br />
          Pilot Operations
        </>
      ),

      subtitle: (
        <>
          Operational support for
          <br />
          AI-based cardiovascular diagnostics
        </>
      ),

      description: (
        <>
          Supported pilot operations for an AI-based cardiovascular diagnostic
          service targeting Samsung Electronics DS employees, including wearable
          data monitoring, operational analytics, and reporting workflows.
        </>
      ),

      overview: {
        client: "Samsung Electronics DS Division",
        company: "Wellysis",
        role: "Operations · Data Monitoring · Reporting",
        period: "2023.09 — 2023.12",
      },

      problem: [
        "Large-scale wearable device transmission and participant monitoring workflows needed stable operational management.",

        "Operational teams needed rapid identification and response for missing or abnormal data transmissions.",

        "Pilot program results had to be structured into operational reports for hospitals and related stakeholders.",
      ],

      solution: [
        "Continuously monitored participant wearable data transmission and operational status throughout the pilot program.",

        "Supported operational response workflows for missing data and abnormal transmission issues.",

        "Assisted operational analytics and reporting workflows using collected participant data.",
      ],

      features: [
        {
          title: "Healthcare Operations",
          desc: "AI healthcare service operational support",
        },

        {
          title: "Data Monitoring",
          desc: "Wearable transmission monitoring",
        },

        {
          title: "Operational Reporting",
          desc: "Operational analytics and reporting",
        },

        {
          title: "Issue Tracking",
          desc: "Missing data and anomaly 대응",
        },

        {
          title: "Participant Management",
          desc: "Participant monitoring workflows",
        },

        {
          title: "Operational Stability",
          desc: "Stable pilot operations support",
        },
      ],

      impact: [
        "Structured operational workflows supported stable management of pilot participants and wearable data.",

        "Continuous monitoring minimized operational risks related to missing or abnormal data transmission.",

        "Operational reporting workflows contributed to discussions regarding hospital-level service adoption.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`pilot-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="pilot-hero">
        <span className="pilot-category">{t.category}</span>

        <h1 className="pilot-title">{t.title}</h1>

        <h2 className="pilot-subtitle">{t.subtitle}</h2>

        <p className="pilot-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="pilot-overview">
        <div className="overview-card">
          <span>Client</span>
          <h3>{t.overview.client}</h3>
        </div>

        <div className="overview-card">
          <span>Company</span>
          <h3>{t.overview.company}</h3>
        </div>

        <div className="overview-card">
          <span>Role</span>
          <h3>{t.overview.role}</h3>
        </div>

        <div className="overview-card">
          <span>Period</span>
          <h3>{t.overview.period}</h3>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="pilot-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* SOLUTION */}

      <section className="pilot-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="pilot-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="pilot-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="pilot-stack">
        <span>Healthcare AI</span>
        <span>Wearable Data</span>
        <span>Operations</span>
        <span>Monitoring</span>
        <span>Reporting</span>
        <span>Data Analytics</span>
      </section>
    </main>
  );
}

export default WellysisPilotPage;
