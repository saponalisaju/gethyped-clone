import React from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HeroSection from "./section/header/Header";
import IntroSection from "./section/intro/IntroSection";
import ExpertiseSection from "./section/expertise/SectionExperties";
import SelectedWorkSection from "./section/work/SectionSelectedWork";
import BrandSection from "./section/brand/SectionBrand";

import "./App.css";

/* ─── App ─────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ExpertiseSection />
        <SelectedWorkSection />
        <BrandSection />
      </main>
      <Footer />
    </>
  );
}
