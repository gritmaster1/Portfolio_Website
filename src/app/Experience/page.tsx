import { ExperiencePanel } from "@/components/ui/experience-panel";
import { ProjectsPanel } from "@/components/ui/projects-panel";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-16 bg-[#030303]">
      <ExperiencePanel />
      <div className="mt-20">
        <ProjectsPanel />
      </div>
    </div>
  );
}
