import { projects, type Project } from "@/lib/projects";
import { projectCovers } from "./ProjectCovers";
import { ShellIcon } from "./Decor";

/**
 * Card and cover visual. Each project has an illustrated cover in the shared tidal style
 * (see ProjectCovers.tsx). Real screenshots stay in the gallery on each project's detail page.
 */
export function ProjectVisual({ project }: { project: Project; sizes?: string; priority?: boolean }) {
  const Cover = projectCovers[project.slug];
  if (Cover) {
    const no = String(projects.findIndex((p) => p.slug === project.slug) + 1).padStart(2, "0");
    return <Cover no={no} />;
  }

  // Fallback for a newly added project without a custom cover yet
  return (
    <div className="mist-wash absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
      <ShellIcon className="h-12 w-12 text-sand" />
      <p className="font-serif text-3xl leading-tight text-sea">{project.title}</p>
    </div>
  );
}
