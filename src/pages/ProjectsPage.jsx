import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import "./ProjectsPage.css";

/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {
  ko: {
    back: "홈으로 돌아가기",

    title: "Projects",

    description: "실제 운영 환경과 AI 기술을 연결하며 수행한 프로젝트들입니다.",

    filters: ["All", "Work", "Academic"],

    projects: [
      /* =========================================================
         GLOBAL CAMPAIGN
      ========================================================= */

      {
        type: "work",
        layout: "wide",

        title: "CES 2026 Global Operations",

        subtitle: "삼성 글로벌 뉴스룸 CES 운영 지원 및 콘텐츠 성과 분석",

        category: "Global Campaign",

        link: "/projects/ces-2026",
      },

      {
        type: "work",
        layout: "wide",

        title: "Galaxy Unpacked Operations",

        subtitle: "갤럭시 언팩 글로벌 운영 대응 및 실시간 이슈 관리",

        category: "Global Campaign",

        link: "/projects/galaxy-unpacked",
      },

      /* =========================================================
         WORK PROJECTS
      ========================================================= */

      {
        type: "work",
        layout: "large",

        title: "기사 발행 검수 자동화 툴",

        subtitle: "발행 누락 및 중복 여부를 자동 검수하는 내부 웹 도구",

        category: "Workflow Automation",

        /* 🛠 수정: 이미지 아직 없으면 빈값 */
        image: "",

        link: "/projects/article-validation",
      },

      {
        type: "work",
        layout: "large",

        title: "뉴스룸 통합 모니터링 플랫폼",

        subtitle:
          "글로벌 뉴스룸 운영 현황을 일괄 모니터링하기 위한 내부 플랫폼",

        category: "Platform Operations",

        /* 🛠 수정 */
        image: "",

        link: "/projects/newsroom-monitoring",
      },

      {
        type: "work",
        layout: "large",

        title: "심혈관 AI 진단 서비스 시범사업 운영 지원",

        subtitle: "B2B AI 기반 심혈관 진단 서비스 시범사업 운영 지원",

        category: "Healthcare AI",

        /* 🛠 수정 */
        image: "",

        link: "/projects/wellysis-pilot",
      },

      /* =========================================================
         ACADEMIC PROJECTS
      ========================================================= */

      {
        type: "academic",
        layout: "large",

        title: "Disaster Detection",

        subtitle: "RGB + FIR 기반 재난 환경 인명 탐지",

        category: "Computer Vision",

        /* 🛠 수정 */
        image: "",

        link: "/projects/disaster-detection",
      },

      {
        type: "academic",
        layout: "large",

        title: "K-Food Classifier",

        subtitle: "K-food 데이터셋 기반 다중 클래스 분류",

        category: "ML/DL",

        /* 🛠 수정 */
        image: "",

        link: "/projects/kfood-classifier",
      },

      {
        type: "academic",
        layout: "large",

        title: "Sketch Search AI",

        subtitle: "디자이너를 위한 일러스트 검색 AI",

        category: "CNN / Object Detection",

        /* 🛠 수정 */
        image: "",

        link: "/projects/sketch-search",
      },

      {
        type: "academic",
        layout: "large",

        title: "Cosmetic OCR AI",

        subtitle: "시각장애인을 위한 화장품 패키징 OCR",

        category: "OCR / RCNN",

        /* 🛠 수정 */
        image: "",

        link: "/projects/ocr-blind",
      },

      {
        type: "academic",
        layout: "large",

        title: "Oil Condition AI",

        subtitle: "건설 장비 작동유 상태 진단 모델",

        category: "Machine Learning",

        /* 🛠 수정 */
        image: "",

        link: "/projects/oil-condition",
      },
    ],
  },

  /* =========================================================
     ENGLISH
  ========================================================= */

  en: {
    back: "Back to Home",

    title: "Projects",

    description:
      "Projects connecting AI technology with real operational environments.",

    filters: ["All", "Work", "Academic"],

    projects: [
      /* =========================================================
         GLOBAL CAMPAIGN
      ========================================================= */

      {
        type: "work",
        layout: "wide",

        title: "CES 2026 Global Operations",

        subtitle: "Samsung global newsroom support during CES 2026.",

        category: "Global Campaign",

        link: "/projects/ces-2026",
      },

      {
        type: "work",
        layout: "wide",

        title: "Galaxy Unpacked Operations",

        subtitle:
          "Operational support and issue monitoring during Galaxy Unpacked.",

        category: "Global Campaign",

        link: "/projects/galaxy-unpacked",
      },

      /* =========================================================
         WORK PROJECTS
      ========================================================= */

      {
        type: "work",
        layout: "large",

        title: "Article Validation Automation Tool",

        subtitle:
          "Internal web tool for detecting missing and duplicated article publications.",

        category: "Workflow Automation",

        image: "",

        link: "/projects/article-validation",
      },

      {
        type: "work",
        layout: "large",

        title: "Global Newsroom Monitoring Platform",

        subtitle:
          "Integrated platform for monitoring global newsroom operations.",

        category: "Platform Operations",

        image: "",

        link: "/projects/newsroom-monitoring",
      },

      {
        type: "work",
        layout: "large",

        title: "Cardiovascular AI Pilot Operations",

        subtitle:
          "Operational support for AI-based cardiovascular pilot programs.",

        category: "Healthcare AI",

        image: "",

        link: "/projects/wellysis-pilot",
      },

      /* =========================================================
         ACADEMIC PROJECTS
      ========================================================= */

      {
        type: "academic",
        layout: "large",

        title: "Disaster Detection",

        subtitle: "Human detection in disaster environments",

        category: "Computer Vision",

        image: "",

        link: "/projects/disaster-detection",
      },

      {
        type: "academic",
        layout: "large",

        title: "K-Food Classifier",

        subtitle: "Multi-class classification using K-food datasets",

        category: "ML/DL",

        image: "",

        link: "/projects/kfood-classifier",
      },

      {
        type: "academic",
        layout: "large",

        title: "Sketch Search AI",

        subtitle: "Illustration search AI service for designers",

        category: "CNN / Object Detection",

        image: "",

        link: "/projects/sketch-search",
      },

      {
        type: "academic",
        layout: "large",

        title: "Cosmetic OCR AI",

        subtitle: "OCR model for cosmetic packaging accessibility",

        category: "OCR / RCNN",

        image: "",

        link: "/projects/ocr-blind",
      },

      {
        type: "academic",
        layout: "large",

        title: "Oil Condition AI",

        subtitle: "Operational oil condition assessment model",

        category: "Random Forest",

        image: "",

        link: "/projects/oil-condition",
      },
    ],
  },
};

function ProjectsPage() {
  const { language } = useLanguage();

  const text = projectData[language];

  /* =========================================================
     FILTER STATE
  ========================================================= */

  const [activeFilter, setActiveFilter] = useState("All");

  /* =========================================================
     FILTER LOGIC
  ========================================================= */

  const filteredProjects =
    activeFilter === "All"
      ? text.projects
      : text.projects.filter(
          (project) => project.type === activeFilter.toLowerCase(),
        );

  return (
    <main className="projects-page">
      {/* =========================================================
         BACK BUTTON
      ========================================================= */}

      <Link to="/" className="projects-back">
        ← {text.back}
      </Link>

      {/* =========================================================
         HERO
      ========================================================= */}

      <section className="projects-hero">
        <h1>{text.title}</h1>

        <p>{text.description}</p>

        {/* =========================================================
           FILTER BUTTONS
        ========================================================= */}

        <div className="projects-filters">
          {text.filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================
         PROJECT GRID
      ========================================================= */}

      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <Link
            key={project.title}
            to={project.link}
            className={`project-card ${project.layout}`}
          >
            {/* =========================================================
               LARGE CARD
            ========================================================= */}

            {project.layout === "large" && (
              <>
                <div className="project-image-wrap">
                  {/* 🛠 수정: 이미지 있으면 출력 */}
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    /* 🛠 수정: placeholder */
                    <div className="project-placeholder">
                      <span>{project.category}</span>
                    </div>
                  )}

                  {/* shimmer */}
                  <span className="project-shine" />
                </div>

                <div className="project-info">
                  <span>{project.category}</span>

                  <h2>{project.title}</h2>

                  <p>{project.subtitle}</p>
                </div>
              </>
            )}

            {/* =========================================================
               WIDE CARD
            ========================================================= */}

            {project.layout === "wide" && (
              <div className="wide-card-content">
                <span>{project.category}</span>

                <h2>{project.title}</h2>

                <p>{project.subtitle}</p>
              </div>
            )}
          </Link>
        ))}
      </section>
    </main>
  );
}

export default ProjectsPage;
