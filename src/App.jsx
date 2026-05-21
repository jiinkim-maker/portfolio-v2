import { BrowserRouter, Routes, Route } from "react-router-dom";

import LanguageToggle from "./components/common/LanguageToggle";
import FloatingMascot from "./components/common/FloatingMascot";

import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ExperienceSection from "./components/experience/ExperienceSection";

import ProjectsPage from "./pages/ProjectsPage";

import ArticleValidationPage from "./pages/ArticleValidationPage";
import NewsroomMonitoringPage from "./pages/NewsroomMonitoringPage";
import DisasterDetectionPage from "./pages/DisasterDetectionPage";
import KFoodClassifierPage from "./pages/KFoodClassifierPage";

import Ces2026Page from "./pages/Ces2026Page";
import GalaxyUnpackedPage from "./pages/GalaxyUnpackedPage";
import WellysisPilotPage from "./pages/WellysisPilotPage";
import SketchSearchPage from "./pages/SketchSearchPage";
import OilConditionPage from "./pages/OilConditionPage";
import CosmeticOCRPage from "./pages/CosmeticOCRPage";

function App() {
  return (
    <BrowserRouter>
      {/* =========================================================
         GLOBAL UI
      ========================================================= */}

      <LanguageToggle />
      <FloatingMascot />

      {/* =========================================================
         ROUTES
      ========================================================= */}

      <Routes>
        {/* =========================================================
           HOME
        ========================================================= */}

        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <AboutSection />
              <ExperienceSection />
            </main>
          }
        />

        {/* =========================================================
           PROJECT MAIN
        ========================================================= */}

        <Route path="/projects" element={<ProjectsPage />} />

        {/* =========================================================
           WORK PROJECTS
        ========================================================= */}

        <Route
          path="/projects/article-validation"
          element={<ArticleValidationPage />}
        />

        <Route
          path="/projects/newsroom-monitoring"
          element={<NewsroomMonitoringPage />}
        />

        <Route
          path="/projects/disaster-detection"
          element={<DisasterDetectionPage />}
        />

        <Route
          path="/projects/kfood-classifier"
          element={<KFoodClassifierPage />}
        />

        <Route
          path="/projects/wellysis-pilot"
          element={<WellysisPilotPage />}
        />
        <Route path="/projects/sketch-search" element={<SketchSearchPage />} />
        <Route path="/projects/oil-condition" element={<OilConditionPage />} />
        <Route path="/projects/ocr-blind" element={<CosmeticOCRPage />} />

        {/* =========================================================
           GLOBAL CAMPAIGNS
        ========================================================= */}

        <Route path="/projects/ces-2026" element={<Ces2026Page />} />

        <Route
          path="/projects/galaxy-unpacked"
          element={<GalaxyUnpackedPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
