import "./GalaxyUnpackedPage.css";
import { useLanguage } from "../context/useLanguage";

function GalaxyUnpackedPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "Global Campaign",

      title: (
        <>
          삼성전자 Galaxy Unpacked
          <br />
          February 2026
        </>
      ),

      subtitle: (
        <>
          글로벌 콘텐츠 운영 및
          <br />
          확산 데이터 분석 지원
        </>
      ),

      description: (
        <>
          Galaxy Unpacked 캠페인 기간 동안 글로벌 뉴스룸 콘텐츠 검수 및 운영을
          지원하고, 국가별 콘텐츠 확산 데이터와 KPI 성과를 분석하여 운영 리포트
          제작을 지원한 프로젝트입니다.
        </>
      ),

      overview: {
        client: "삼성전자 DX 부문",
        company: "제일기획",
        role: "콘텐츠 검수 · 데이터 분석 · KPI 리포트",
        period: "2026.01 — 2026.03",
      },

      problem: [
        "Galaxy Unpacked 캠페인 기간 동안 글로벌 뉴스룸에서 동시에 대규모 콘텐츠가 발행되며 운영 복잡도가 급격히 증가했습니다.",

        "법인별 콘텐츠 품질과 글로벌 가이드라인 준수 여부를 실시간으로 모니터링할 필요가 있었습니다.",

        "확산 데이터 및 유입 경로를 국가별로 분석하고 광고주 및 유관 부서 대상 성과 리포트를 구조화해야 했습니다.",
      ],

      solution: [
        "GA4 및 내부 운영 DB를 활용하여 글로벌 콘텐츠 확산 경로 및 국가별 성과 데이터를 분석했습니다.",

        "콘텐츠 운영 이슈 및 글로벌 가이드라인 준수 여부를 지속적으로 모니터링하며 법인 커뮤니케이션을 지원했습니다.",

        "수집된 데이터를 KPI 중심으로 구조화하여 광고주 및 유관 부서 제출용 성과 리포트 제작을 지원했습니다.",
      ],

      features: [
        {
          title: "Global Operations",
          desc: "글로벌 뉴스룸 콘텐츠 운영 지원",
        },

        {
          title: "GA4 Analytics",
          desc: "콘텐츠 유입 및 확산 성과 분석",
        },

        {
          title: "KPI Reporting",
          desc: "성과 지표 기반 운영 리포트 제작",
        },

        {
          title: "Content Validation",
          desc: "글로벌 콘텐츠 품질 검수",
        },

        {
          title: "Cross-team Communication",
          desc: "법인 및 유관 부서 협업 지원",
        },

        {
          title: "Operational Stability",
          desc: "대규모 글로벌 캠페인 운영 대응",
        },
      ],

      impact: [
        "국가별 콘텐츠 유입 및 확산 데이터를 구조화하여 글로벌 운영 성과를 정량적으로 분석할 수 있었습니다.",

        "콘텐츠 운영 이슈를 신속하게 대응하며 글로벌 뉴스룸 품질 유지 및 운영 안정성을 확보했습니다.",

        "성과 데이터를 기반으로 광고주 및 유관 부서 대상 운영 리포트 제작을 지원했습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "Global Campaign",

      title: (
        <>
          Samsung Galaxy Unpacked
          <br />
          February 2026
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
          Supported Samsung global newsroom operations during Galaxy Unpacked
          2026 by monitoring large-scale content distribution, validating
          operational quality, and assisting KPI reporting workflows.
        </>
      ),

      overview: {
        client: "Samsung Electronics DX Division",
        company: "Cheil Worldwide",
        role: "Content Validation · Analytics · KPI Reporting",
        period: "2026.01 — 2026.03",
      },

      problem: [
        "Large-scale global content publishing significantly increased operational complexity during the campaign period.",

        "Continuous monitoring of content quality and global guideline compliance across regional newsrooms was required.",

        "Traffic sources and campaign performance needed to be analyzed and structured into KPI-based reports.",
      ],

      solution: [
        "Analyzed content distribution paths and regional performance metrics using GA4 and internal operational databases.",

        "Supported newsroom issue monitoring and communication workflows across regional teams.",

        "Structured collected data into KPI-based operational reports for advertisers and internal stakeholders.",
      ],

      features: [
        {
          title: "Global Operations",
          desc: "Global newsroom operations support",
        },

        {
          title: "GA4 Analytics",
          desc: "Traffic and performance analytics",
        },

        {
          title: "KPI Reporting",
          desc: "Performance reporting workflows",
        },

        {
          title: "Content Validation",
          desc: "Global content quality monitoring",
        },

        {
          title: "Cross-team Communication",
          desc: "Regional communication support",
        },

        {
          title: "Operational Stability",
          desc: "Large-scale campaign operational support",
        },
      ],

      impact: [
        "Structured analytics enabled quantitative evaluation of regional campaign performance.",

        "Rapid operational response workflows helped maintain newsroom quality and campaign stability.",

        "Supported advertiser-facing KPI reporting and internal campaign analysis.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`unpacked-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="unpacked-hero">
        <span className="unpacked-category">{t.category}</span>

        <h1 className="unpacked-title">{t.title}</h1>

        <h2 className="unpacked-subtitle">{t.subtitle}</h2>

        <p className="unpacked-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="unpacked-overview">
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

      <section className="unpacked-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* SOLUTION */}

      <section className="unpacked-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="unpacked-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="unpacked-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="unpacked-stack">
        <span>GA4</span>
        <span>Global Operations</span>
        <span>KPI Reporting</span>
        <span>Content Validation</span>
        <span>Newsroom Operations</span>
        <span>Data Analytics</span>
      </section>
    </main>
  );
}

export default GalaxyUnpackedPage;
