import { ArrowRight } from 'lucide-react';
import type { Project } from '../../content/projects';
import Tag from './tag';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const thumb = (
    <img
      src={project.image}
      alt=""
      loading="lazy"
      className="aspect-video w-full object-cover transition-opacity duration-200"
    />
  );
  const link = project.githubUrl ?? project.liveUrl;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[8px] border border-border-light bg-surface shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-border-dark dark:bg-surface-dark">
      {link ? (
        <a href={link} className="block shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" target="_blank" rel="noopener noreferrer">
          {thumb}
        </a>
      ) : (
        <div className="shrink-0">{thumb}</div>
      )}
      <div className="relative flex flex-1 flex-col gap-3 p-6">
        {project.category && (
          <span className="absolute top-6 right-6 text-[0.625rem] text-[#6B7280] dark:text-[#9CA3AF] tracking-wider uppercase">
            {project.category}
          </span>
        )}
        <h3 className="font-serif text-[1.25rem] font-medium leading-snug text-ink dark:text-[#EDEDED] pr-16 mt-1">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.technologies.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-auto flex gap-4 pt-4 text-[0.875rem]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              Code <ArrowRight className="h-3 w-3" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              Demo <ArrowRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
