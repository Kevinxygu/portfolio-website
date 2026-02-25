import Image from 'next/image';
import { ExperienceData, ProjectData, CaseData, ExtracurricularData } from '@/lib/types';

interface CompactViewProps {
  experiences: ExperienceData[];
  projects: ProjectData[];
  cases: CaseData[];
  extracurriculars: ExtracurricularData[];
}

function CompactListItem({ text, dotColor, link }: { text: string; dotColor?: string; link?: string }) {
  const content = (
    <div className="flex items-center gap-3 py-1.5 group break-inside-avoid">
      <span
        className="w-2.5 h-2.5 flex-shrink-0"
        style={{ backgroundColor: dotColor || '#8EB69B' }}
      />
      <span className="text-zinc-300 group-hover:text-white transition-colors text-sm">
        {text}
      </span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

export function CompactView({ experiences, projects, cases, extracurriculars }: CompactViewProps) {
  return (
    <div className="min-h-screen bg-palette-dark-green text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-zinc-300 text-base max-w-2xl leading-relaxed">
            Hi, I&apos;m Kevin! I&apos;m interested in combining software engineering and sales to build solutions tackling difficult problems, educate others, and support my community
          </p>

          {/* Contact icons */}
          <div className="flex gap-2 mt-4">
            <a
              href="https://www.linkedin.com/in/kevinxygu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
                className="w-7 h-7 transition-opacity hover:opacity-70"
              />
            </a>
            <a
              href="https://github.com/Kevinxygu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                width={28}
                height={28}
                className="w-7 h-7 transition-opacity hover:opacity-70"
              />
            </a>
            <a
              href="mailto:kevinxygu@gmail.com"
            >
              <Image
                src="/icons/email.png"
                alt="Email"
                width={28}
                height={28}
                className="w-7 h-7 transition-opacity hover:opacity-70"
              />
            </a>
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="mb-10 pb-10 border-b border-palette-medium-green/20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Experience</h2>
          <div className="columns-1 md:columns-2 gap-x-12">
            {experiences.map((exp, i) => (
              <CompactListItem
                key={i}
                text={exp.compactText || exp.title}
                dotColor={exp.dotColor}
                link={exp.link}
              />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="mb-10 pb-10 border-b border-palette-medium-green/20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Technical Projects</h2>
          <div className="columns-1 md:columns-2 gap-x-12">
            {projects.map((project, i) => (
              <CompactListItem
                key={i}
                text={project.compactText || project.title}
                dotColor={project.dotColor}
                link={project.githubLink}
              />
            ))}
          </div>
        </div>

        {/* Cases */}
        <div id="cases" className="mb-10 pb-10 border-b border-palette-medium-green/20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Case Studies & Competitions</h2>
          <div className="columns-1 md:columns-2 gap-x-12">
            {cases.map((c, i) => (
              <CompactListItem
                key={i}
                text={c.compactText || c.title}
                dotColor={c.dotColor}
                link={c.link}
              />
            ))}
          </div>
        </div>

        {/* Extracurriculars */}
        <div id="community" className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Community</h2>
          <div className="columns-1 md:columns-2 gap-x-12">
            {extracurriculars.map((ec, i) => (
              <CompactListItem
                key={i}
                text={ec.compactText || ec.title}
                dotColor={ec.dotColor}
                link={ec.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
