import "./KFoodClassifierPage.css";
import { useLanguage } from "../context/useLanguage";

function KFoodClassifierPage() {
  const { language } = useLanguage();

  const content = {
    ko: {
      category: "ML/DL",

      title: <>K-Food Classifier</>,

      subtitle: (
        <>
          K-Food 데이터셋 기반
          <br />
          다중 클래스 이미지 분류
        </>
      ),

      description: (
        <>
          다양한 K-Food 이미지를 분류하기 위한 다중 클래스 분류 모델을 구현하고,
          데이터 기반 가설 수립과 성능 개선 실험을 반복하여 최종 F1-score
          97.74를 달성한 Deep Learning 프로젝트입니다.
        </>
      ),

      overview: {
        role: "ML/DL Modeling · Experiment Design",
        stack: "PyTorch · ResNet · Python",
        focus: "Image Classification",
        result: "F1-score 97.74",
      },

      problem: [
        "K-Food 이미지 데이터셋은 클래스별 이미지 수 차이와 이미지 품질 편차가 존재하여 안정적인 다중 클래스 분류 성능 확보가 어려웠습니다.",

        "특히 음식 이미지 특성상 유사한 색상과 형태를 가진 클래스들이 많아 오분류가 빈번하게 발생했습니다.",

        "또한 단순 모델 학습만으로는 높은 일반화 성능 확보에 한계가 있어 데이터 기반 실험 설계와 반복적인 성능 개선 과정이 필요했습니다.",
      ],

      solution: [
        "EDA 기반 데이터 분석을 통해 클래스 불균형 문제를 확인하고 샘플링 및 데이터 증강 전략을 적용했습니다.",

        "논문 기반 가설을 바탕으로 Optimizer, Scheduler, Fine-tuning 범위 등에 대한 실험을 반복적으로 수행했습니다.",

        "또한 오분류 시각화를 통해 정량적 개선 근거를 확보하고 ResNet 계열 모델 간 Ensemble 전략을 적용하여 최종 성능을 향상시켰습니다.",
      ],

      features: [
        {
          title: "EDA Analysis",
          desc: "클래스 분포 및 데이터 품질 분석",
        },

        {
          title: "Data Augmentation",
          desc: "샘플링 및 증강 기반 데이터 최적화",
        },

        {
          title: "Experiment Design",
          desc: "논문 기반 성능 실험 및 가설 검증",
        },

        {
          title: "Misclassification Analysis",
          desc: "오분류 시각화 기반 피드백 루프",
        },

        {
          title: "ResNet Ensemble",
          desc: "유사도 기반 Hybrid Ensemble 구조",
        },

        {
          title: "Performance Optimization",
          desc: "F1-score 97.74 달성",
        },
      ],

      impact: [
        "데이터 기반 가설 설정과 반복적인 성능 실험을 통해 모델 정확도를 지속적으로 향상시킬 수 있었습니다.",

        "특히 오분류 시각화와 Ensemble 전략을 결합하여 높은 일반화 성능을 확보했고 최종적으로 F1-score 97.74를 달성했습니다.",

        "해당 프로젝트는 한국지능정보사회진흥원장상(우수상)을 수상했습니다.",
      ],
    },

    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
      category: "ML/DL",

      title: <>K-Food Classifier</>,

      subtitle: (
        <>
          Multi-class classification
          <br />
          using K-Food image datasets
        </>
      ),

      description: (
        <>
          A deep learning image classification project implementing a
          multi-class classifier for diverse K-Food datasets, achieving a final
          F1-score of 97.74 through iterative experiment design and performance
          optimization.
        </>
      ),

      overview: {
        role: "ML/DL Modeling · Experiment Design",
        stack: "PyTorch · ResNet · Python",
        focus: "Image Classification",
        result: "F1-score 97.74",
      },

      problem: [
        "The K-Food dataset contained class imbalance and image quality variations, making stable multi-class classification difficult.",

        "Many food categories shared visually similar colors and shapes, resulting in frequent misclassification issues.",

        "Simple model training alone was insufficient for achieving strong generalization performance, requiring data-driven experimentation and optimization.",
      ],

      solution: [
        "EDA-based analysis was performed to identify class imbalance issues, followed by sampling and augmentation strategies.",

        "Experiment pipelines were repeatedly designed and tested based on hypotheses involving optimizers, schedulers, and fine-tuning strategies.",

        "Misclassification visualization and hybrid ensemble techniques using ResNet architectures were applied to improve final performance.",
      ],

      features: [
        {
          title: "EDA Analysis",
          desc: "Dataset distribution and quality analysis",
        },

        {
          title: "Data Augmentation",
          desc: "Sampling and augmentation optimization",
        },

        {
          title: "Experiment Design",
          desc: "Paper-based hypothesis experiments",
        },

        {
          title: "Misclassification Analysis",
          desc: "Visualization-driven feedback loop",
        },

        {
          title: "ResNet Ensemble",
          desc: "Similarity-based hybrid ensemble",
        },

        {
          title: "Performance Optimization",
          desc: "Achieved F1-score 97.74",
        },
      ],

      impact: [
        "Through data-driven experimentation and iterative optimization, the model performance was continuously improved.",

        "By combining misclassification analysis with ensemble strategies, the project achieved strong generalization performance and a final F1-score of 97.74.",

        "The project received the Excellence Award from the National Information Society Agency (NIA).",
      ],
    },
  };

  const t = content[language] || content.ko;

  return (
    <main className={`kfood-page ${language === "ko" ? "is-ko" : "is-en"}`}>
      {/* HERO */}

      <section className="kfood-hero">
        <span className="kfood-category">{t.category}</span>

        <h1 className="kfood-title">{t.title}</h1>

        <h2 className="kfood-subtitle">{t.subtitle}</h2>

        <p className="kfood-description">{t.description}</p>
      </section>

      {/* OVERVIEW */}

      <section className="kfood-overview">
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
          <span>Result</span>
          <h3>{t.overview.result}</h3>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="kfood-section">
        <div className="section-eyebrow">Problem</div>

        <div className="section-content">
          {t.problem.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* IMAGE */}

      <section className="kfood-image-section">
        <img src="/images/kfood-cover.jpg" alt="K-Food Classifier" />
      </section>

      {/* SOLUTION */}

      <section className="kfood-section">
        <div className="section-eyebrow">Solution</div>

        <div className="section-content">
          {t.solution.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="kfood-feature-grid">
        {t.features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* IMPACT */}

      <section className="kfood-section">
        <div className="section-eyebrow">Impact</div>

        <div className="section-content">
          {t.impact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* STACK */}

      <section className="kfood-stack">
        <span>PyTorch</span>
        <span>ResNet</span>
        <span>Python</span>
        <span>Image Classification</span>
        <span>EDA</span>
        <span>Ensemble</span>
        <span>Deep Learning</span>
      </section>
    </main>
  );
}

export default KFoodClassifierPage;
