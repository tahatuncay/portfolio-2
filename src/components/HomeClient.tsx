"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/hooks/useTheme";
import { AudioProvider } from "@/context/AudioContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import VolunteeringSection from "@/components/VolunteeringSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SkyBackground from "@/components/sky/SkyBackground";

export default function HomeClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <AudioProvider>
        {isMounted && <CustomCursor />}
        <SkyBackground />
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <VolunteeringSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </AudioProvider>
    </ThemeProvider>
  );
}
