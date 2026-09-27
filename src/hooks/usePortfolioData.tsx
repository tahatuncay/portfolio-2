"use client";

import { useMemo } from "react";
import { useLanguage } from "./useLanguage";
import * as tr from "@/data/portfolio";
import * as en from "@/data/portfolioEN";

/**
 * Aktif dile göre portfolio verilerini döndürür.
 * Dil değiştiğinde tüm veriler otomatik güncellenir.
 */
export function usePortfolioData() {
  const { language } = useLanguage();

  return useMemo(() => {
    if (language === "en") {
      return {
        profile: en.profileEN,
        experience: en.experienceEN,
        projects: en.projectsEN,
        certifications: en.certificationsEN,
        volunteering: en.volunteeringEN,
        skills: en.skillsEN,
        education: en.educationEN,
        socialLinks: en.socialLinksEN,
        musicTrack: tr.musicTrack, // müzik dile bağlı değil
      };
    }
    return {
      profile: tr.profile,
      experience: tr.experience,
      projects: tr.projects,
      certifications: tr.certifications,
      volunteering: tr.volunteering,
      skills: tr.skills,
      education: tr.education,
      socialLinks: tr.socialLinks,
      musicTrack: tr.musicTrack,
    };
  }, [language]);
}
