import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../content/projects';
import Tag from './Tag';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const thumb = (
    <img
      src={project.image}
      alt=""
      loading="lazy"
      className="aspect-video w-full object-cover"
    />
  );
  const link = project.githubUrl ?? project.liveUrl;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {link ? (
        <a href={link} className="block shrink-0" target="_blank" rel="noopener noreferrer">
          {thumb}
        </a>
      ) : (
        <div className="shrink-0">{thumb}</div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-serif text-lg font-medium leading-snug text-ink dark:text-neutral-100">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-auto flex gap-4 pt-1 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-600 hover:text-accent dark:text-neutral-400 dark:hover:text-blue-400"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-600 hover:text-accent dark:text-neutral-400 dark:hover:text-blue-400"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
