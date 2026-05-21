import { motion } from "framer-motion";
import { useLanguage } from "../../context/useLanguage";
import "./ExperienceSection.css";

const experienceText = {
  en: {
    label: "Experience",
    title: "Real-world operations, analytics, and automation experience.",
    companies: [
      {
        company: "Cheil Worldwide",
        period: "2025 — Present",
        role: "Samsung Global Newsroom Operations / Social PR Data Analytics",
        summary:
          "Supported global PR platform operations for Samsung Newsroom and developed workflow automation systems to improve content verification and reporting efficiency.",
        metrics: [
          "45 Global Newsrooms",
          "1,000+ Monthly Articles",
          "GA4 Reporting",
          "Workflow Automation",
        ],
        works: [
          "Developed an internal AX/workflow automation tool for publication verification.",
          "Managed global social PR platform operations for Samsung Newsroom.",
          "Analyzed GA4-based performance data and prepared advertiser reports.",
          "Supported post-publication revision workflows and cross-agency communication.",
        ],
      },
      {
        company: "Wellysis",
        period: "2023 — 2025",
        role: "Healthcare AI Data Operations / B2B Service Support",
        summary:
          "Supported clinical AI service operations by managing ECG data quality, pilot program workflows, and operational statistics for B2B healthcare clients.",
        metrics: [
          "Clinical Data Curation",
          "ECG Data QA",
          "Pilot Operations",
          "B2B Service Support",
        ],
        works: [
          "Curated and labeled clinical ECG data for AI-based diagnostic workflows.",
          "Supported B2B healthcare service operations and pilot programs.",
          "Managed operational statistics and service usage data.",
          "Handled data validation across hospitals, company teams, and examinees.",
        ],
      },
    ],
  },
  ko: {
    label: "경험",
    title: "실제 운영, 데이터 분석, 업무 자동화 경험을 갖추고 있습니다.",
    companies: [
      {
        company: "제일기획",
        period: "2025 — 현재",
        role: "삼성 글로벌 뉴스룸 운영 / 소셜 PR 성과 데이터 분석",
        summary:
          "삼성 글로벌 뉴스룸 운영을 지원하며, 콘텐츠 검수와 광고주 보고 효율을 높이기 위한 AX/업무 자동화 시스템을 개발했습니다.",
        metrics: [
          "45개 글로벌 뉴스룸",
          "월 1,000건+ 기사",
          "GA4 리포팅",
          "업무 자동화",
        ],
        works: [
          "기사 발행 검수용 AX/업무 자동화 내부 도구 개발",
          "삼성 뉴스룸 글로벌 소셜 PR 플랫폼 운영 지원",
          "GA4 기반 성과 데이터 집계 및 광고주 보고 리포트 작성",
          "Post Revision 및 파트너사 커뮤니케이션 프로세스 지원",
        ],
      },
      {
        company: "웰리시스",
        period: "2023 — 2025",
        role: "헬스케어 AI 데이터 운영 / B2B 서비스 운영 지원",
        summary:
          "ECG 임상 데이터 품질 관리, 시범 사업 운영 지원, B2B 서비스 운영 통계 관리를 수행하며 의료 AI 서비스 운영을 지원했습니다.",
        metrics: [
          "임상 데이터 큐레이션",
          "ECG 데이터 QA",
          "시범 사업 지원",
          "B2B 운영 지원",
        ],
        works: [
          "AI 진단 워크플로우를 위한 ECG 임상 데이터 큐레이션 및 라벨링",
          "B2B 헬스케어 서비스 운영 및 시범 사업 지원",
          "운영 통계 지표 및 서비스 이용 데이터 관리",
          "병원, 기업, 검진자 간 데이터 검증 및 운영 커뮤니케이션 지원",
        ],
      },
    ],
  },
};

function ExperienceSection() {
  const { language } = useLanguage();
  const text = experienceText[language];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-head">
        <p className="experience-label">{text.label}</p>
        <h2>{text.title}</h2>
      </div>

      <div className="experience-list">
        {text.companies.map((item, index) => (
          <motion.article
            className="experience-card"
            key={item.company}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <div className="experience-card-top">
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </div>

            <p className="experience-summary">{item.summary}</p>

            <div className="experience-metrics">
              {item.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>

            <ul className="experience-works">
              {item.works.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
