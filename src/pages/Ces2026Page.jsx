import "./Ces2026Page.css";
import { useLanguage } from "../context/useLanguage";

function Ces2026Page() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "Global Campaign",

      title: (
        <>
          삼성전자 CES 2026
          <br />
          “The First Look”
        </>
      ),

      subtitle: (
        <>
          글로벌 뉴스룸 콘텐츠 운영 및
          <br />
          확산 성과 분석 지원
        </>
      ),

      description: (
        <>
          세계 최대 IT 가전 전시회 CES 기간 동안 삼성전자 글로벌 뉴스룸 콘텐츠
          운영을 지원하고, 글로벌 콘텐츠 확산 데이터 및 KPI 성과를 분석하여 운영
          리포트 제작을 지원한 프로젝트입니다.
        </>
      ),

      overview: {
        client: "삼성전자 DX 부문",
        company: "제일기획",
        role: "콘텐츠 검수 · 데이터 분석 · KPI 리포트",
        period: "2025.12 — 2026.01",
      },

      problem: [
        "CES 기간 동안 다수 국가 법인에서 동시에 대량의 글로벌 콘텐츠가 발행되며 운영 복잡도가 급격히 증가했습니다.",

        "콘텐츠별 확산 성과 및 유입 데이터를 실시간으로 추적하고 글로벌 가이드라인 준수 여부를 지속적으로 관리해야 했습니다.",

        "광고주 및 유관 부서 대상 성과 리포트 제작을 위해 국가별 콘텐츠 데이터를 구조화하여 분석할 필요가 있었습니다.",
      ],

      solution: [
        "GA4 및 내부 운영 DB를 활용하여 글로벌 콘텐츠 유입 경로 및 확산 성과를 분석했습니다.",

        "법인별 운영 현황과 콘텐츠 이슈를 모니터링하며 글로벌 가이드라인 준수 여부를 지속적으로 관리했습니다.",

        "수집된 데이터를 KPI 중심으로 정리하여 광고주 및 유관 부서 제출용 성과 리포트 제작을 지원했습니다.",
      ],

      features: [
        {
          title: "Global Operations",
          desc: "글로벌 뉴스룸 콘텐츠 운영 지원",
        },

        {
          title: "GA4 Analytics",
          desc: "콘텐츠 확산 및 유입 데이터 분석",
        },

        {
          title: "KPI Reporting",
          desc: "성과 지표 기반 운영 리포트 제작",
        },

        {
          title: "Content Monitoring",
          desc: "글로벌 콘텐츠 품질 및 이슈 관리",
        },

        {
          title: "Cross-team Communication",
          desc: "법인 및 유관 부서 커뮤니케이션 지원",
        },

        {
          title: "Operational Stability",
          desc: "대규모 글로벌 캠페인 운영 대응",
        },
      ],

      impact: [
        "콘텐츠 확산 경로 및 유입 데이터를 구조화하여 국가별 성과를 정량적으로 분석할 수 있었습니다.",

        "운영 중 발생하는 이슈를 빠르게 대응하며 글로벌 콘텐츠 품질 유지 및 운영 안정성을 확보했습니다.",

        "성과 데이터를 기반으로 광고주 및 유관 부서 대상 리포트 제작을 지원했습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "Global Campaign",

      title: (
        <>
          Samsung CES 2026
          <br />
          “The First Look”
        </>
      ),

      subtitle: (
        <>
          Global newsroom operations
          <br />
          and performance analytics support
        </>
      ),

      description: (
        <>
          Supported Samsung global newsroom operations during CES 2026 by
          monitoring large-scale content distribution, analyzing performance
          metrics, and assisting KPI reporting workflows.
        </>
      ),

      overview: {
        client: "Samsung Electronics DX Division",
        company: "Cheil Worldwide",
        role: "Content Validation · Analytics · KPI Reporting",
        period: "2025.12 — 2026.01",
      },

      problem: [
        "Large volumes of global content were simultaneously published across multiple regional newsrooms during CES operations.",

        "Operational teams needed continuous monitoring of content quality, traffic performance, and guideline compliance.",

        "Structured reporting workflows were required to provide advertisers and internal stakeholders with clear KPI-based insights.",
      ],

      solution: [
        "Analyzed global traffic sources and content performance using GA4 and internal operational databases.",

        "Monitored newsroom operational issues and global guideline compliance across multiple regions.",

        "Supported KPI-centered reporting workflows for advertisers and related departments.",
      ],

      features: [
        {
          title: "Global Operations",
          desc: "Global newsroom operations support",
        },

        {
          title: "GA4 Analytics",
          desc: "Traffic and content performance analysis",
        },

        {
          title: "KPI Reporting",
          desc: "Performance-based reporting workflows",
        },

        {
          title: "Content Monitoring",
          desc: "Global content quality management",
        },

        {
          title: "Cross-team Communication",
          desc: "Regional and stakeholder coordination",
        },

        {
          title: "Operational Stability",
          desc: "Large-scale campaign operational support",
        },
      ],

      impact: [
        "Structured operational data enabled quantitative analysis of regional campaign performance.",

        "Rapid issue response workflows helped maintain content quality and operational stability.",

        "Supported advertiser-facing KPI reporting and internal operational analysis.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`ces-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="ces-hero">
        <span className="ces-category">{t.category}</span>

        <h1 className="ces-title">{t.title}</h1>

        <h2 className="ces-subtitle">{t.subtitle}</h2>

        <p className="ces-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="ces-overview">
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

      <section className="ces-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* SOLUTION */}

      <section className="ces-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="ces-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="ces-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="ces-stack">
        <span>GA4</span>
        <span>Global Operations</span>
        <span>KPI Reporting</span>
        <span>Content Monitoring</span>
        <span>Newsroom Operations</span>
        <span>Data Analytics</span>
      </section>
    </main>
  );
}

export default Ces2026Page;
