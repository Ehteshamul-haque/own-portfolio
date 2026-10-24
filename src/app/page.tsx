import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechBannerSection } from "@/components/sections/TechBannerSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechBannerSection />
        <ImpactSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <ClientsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
