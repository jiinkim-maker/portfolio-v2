import "./DisasterDetectionPage.css";
import { useLanguage } from "../context/useLanguage";

function DisasterDetectionPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "Computer Vision",

      title: <>Disaster Detection</>,

      subtitle: (
        <>
          UAV 기반 RGB · Thermal Infrared
          <br />
          다중분광 인명 탐지 연구
        </>
      ),

      description: (
        <>
          재난 구조 환경에서의 인명 탐지 정확도를 향상시키기 위해 UAV 기반 RGB ·
          FIR 다중분광 영상과 YOLO 기반 Ensemble 구조를 결합한 Computer Vision
          연구 프로젝트입니다.
        </>
      ),

      overview: {
        role: "Computer Vision Research",
        stack: "YOLO · OpenCV · Python",
        focus: "RGB/FIR Multispectral Detection",
        period: "Academic Research Project",
      },

      problem: [
        "기존 소방 드론 시스템은 RGB 및 FIR 카메라를 활용하지만, 촬영된 영상을 사람이 직접 분석하는 구조에 의존하고 있어 실시간성과 정확도 측면에서 한계가 존재했습니다.",

        "특히 RGB와 FIR(Thermal Infrared)처럼 서로 다른 분광 대역 데이터를 효과적으로 통합하고 분석하는 과정이 충분히 최적화되지 않은 문제가 있었습니다.",

        "재난 환경에서는 조명·연기·복잡한 배경 등 다양한 외부 환경 요소가 존재하기 때문에 단일 영상 기반 탐지 모델만으로는 안정적인 인명 탐지가 어려웠습니다.",
      ],

      solution: [
        "이러한 문제를 해결하기 위해 YOLO 기반 Multispectral Ensemble 구조를 설계하고 RGB/FIR 데이터를 결합한 탐지 시스템을 구현했습니다.",

        "RGB-FIR 영상 간 정밀한 Spatial Registration을 위해 ORB, BFMatcher 기반 특징점 매칭 알고리즘과 Image Sharpening 기법을 적용했습니다.",

        "이후 UAV 기반으로 획득한 RGB 및 FIR 영상을 활용하여 다중분광 데이터에 최적화된 탐지 모델을 학습하고 시뮬레이션 기반 성능 검증을 수행했습니다.",
      ],

      features: [
        {
          title: "Multispectral Imaging",
          desc: "RGB · FIR 다중분광 영상 융합",
        },

        {
          title: "YOLO Ensemble",
          desc: "YOLO 기반 Ensemble 탐지 구조",
        },

        {
          title: "Spatial Registration",
          desc: "ORB · BFMatcher 기반 정합 처리",
        },

        {
          title: "Thermal Detection",
          desc: "열화상 기반 인명 탐지 최적화",
        },

        {
          title: "Image Sharpening",
          desc: "이질 영상 정합 정확도 개선",
        },

        {
          title: "UAV Simulation",
          desc: "UAV 환경 기반 탐지 시뮬레이션",
        },
      ],

      impact: [
        "실험 결과, 제안된 Multispectral Ensemble 기반 탐지 구조는 단일 분광 기반 탐지 모델 대비 복잡한 재난 환경에서 더 높은 인명 탐지 성능을 보였습니다.",

        "특히 RGB와 FIR 영상의 상호보완적 특성을 활용함으로써 다양한 조명 및 환경 조건에서도 탐지 안정성을 향상시킬 수 있었습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "Computer Vision",

      title: <>Disaster Detection</>,

      subtitle: (
        <>
          Multispectral UAV-based
          <br />
          Human Detection Research
        </>
      ),

      description: (
        <>
          A computer vision research project combining UAV-based RGB and thermal
          infrared imaging with a YOLO-based multispectral ensemble framework
          for disaster-environment human detection.
        </>
      ),

      overview: {
        role: "Computer Vision Research",
        stack: "YOLO · OpenCV · Python",
        focus: "RGB/FIR Multispectral Detection",
        period: "Academic Research Project",
      },

      problem: [
        "Conventional disaster-response drones relied heavily on manual interpretation of RGB and FIR imagery, limiting real-time responsiveness and detection accuracy.",

        "Efficient integration and analysis of heterogeneous spectral data such as RGB and thermal infrared imaging remained insufficiently optimized.",

        "Complex disaster environments containing smoke, low-light conditions, and cluttered backgrounds made stable human detection difficult using single-spectrum models.",
      ],

      solution: [
        "To address these limitations, I implemented a YOLO-based multispectral ensemble framework integrating RGB and FIR imaging data.",

        "ORB and BFMatcher-based feature matching algorithms, combined with image sharpening techniques, were applied to improve spatial registration accuracy between heterogeneous spectral images.",

        "The resulting multispectral detection pipeline was trained and validated using UAV-acquired RGB and FIR imagery within simulation environments.",
      ],

      features: [
        {
          title: "Multispectral Imaging",
          desc: "RGB and FIR image fusion",
        },

        {
          title: "YOLO Ensemble",
          desc: "YOLO-based ensemble architecture",
        },

        {
          title: "Spatial Registration",
          desc: "ORB · BFMatcher alignment pipeline",
        },

        {
          title: "Thermal Detection",
          desc: "Thermal-based human detection",
        },

        {
          title: "Image Sharpening",
          desc: "Enhanced registration accuracy",
        },

        {
          title: "UAV Simulation",
          desc: "UAV-based detection simulation",
        },
      ],

      impact: [
        "Experimental results demonstrated that the proposed multispectral ensemble framework significantly improved human detection performance compared to single-spectrum models.",

        "By leveraging the complementary characteristics of RGB and FIR imaging, the system achieved more stable detection performance across diverse environmental conditions.",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`disaster-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="disaster-hero">
        <span className="disaster-category">{t.category}</span>

        <h1 className="disaster-title">{t.title}</h1>

        <h2 className="disaster-subtitle">{t.subtitle}</h2>

        <p className="disaster-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="disaster-overview">
        <div className="overview-card">
          <span>Role</span>
          <h3>{t.overview.role}</h3>
        </div>

        <div className="overview-card">
          <span>Stack</span>
          <h3>{t.overview.stack}</h3>
        </div>

        <div className="overview-card">
          <span>Focus</span>
          <h3>{t.overview.focus}</h3>
        </div>

        <div className="overview-card">
          <span>Period</span>
          <h3>{t.overview.period}</h3>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="disaster-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* IMAGE */}

      <section className="disaster-image-section">
        <img
          src="/images/disaster-detection-cover.jpg"
          alt="Disaster Detection"
        />
      </section>

      {/* SOLUTION */}

      <section className="disaster-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="disaster-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="disaster-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="disaster-stack">
        <span>YOLO</span>
        <span>Python</span>
        <span>OpenCV</span>
        <span>4-Channel</span>
        <span>ORB</span>
        <span>BFMatcher</span>
        <span>Image Processing</span>
        <span>Computer Vision</span>
      </section>
    </main>
  );
}

export default DisasterDetectionPage;
