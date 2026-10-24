import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SkillCategory } from "@/components/skills/SkillCategory";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function SkillsSection() {
  return (
    <SectionContainer id="skills" ariaLabelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Capabilities"
        title="Platforms & Technical Skills"
        description="My technical expertise spans frontend development, backend engineering, databases, distributed systems, Shopify, and cloud infrastructure."
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.id} category={category} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
