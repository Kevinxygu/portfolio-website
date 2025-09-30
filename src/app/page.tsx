import { Experience } from '@/components/Experience';
import { Project } from '@/components/Project';
import { Case } from '@/components/Case';
import { Extracurricular } from '@/components/Extracurricular';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import data from '../constants/data.json'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function HomePage() {
  
  const experiences = data.experiences; 
  const projects = data.projects;
  const cases = data.cases;
  const extracurriculars = data.extracurriculars;

  return (
    <div className="min-h-screen bg-palette-dark-green text-white">
    {/* hero */}
    <section className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left side - text */}
          <div className="flex flex-col items-start">
            <p className="text-white text-xl n mb-3">Thanks for stopping by!</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-palette-medium-green">
              I'm Kevin
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-xl">
              I like software engineering, sales, and supporting my community.
            </p>
            
            {/* socials */}
            <div className="flex gap-2 mb-8">
              <a 
              href="https://www.linkedin.com/in/kevinxygu/" 
              className="text-zinc-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image
                src="/icons/linkedin.png"
                alt="linkedin"
                width={32}
                height={32}
                className="w-8 h-8 transition-opacity hover:opacity-70"
              />
              </a>
              <a 
              href="https://github.com/Kevinxygu" 
              className="text-zinc-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image
                src="/icons/github.png"
                alt="github"
                width={32}
                height={32}
                className="w-8 h-8 transition-opacity hover:opacity-70"
              />
              </a>
              <a 
              href="mailto:kevinxygu@gmail.com" 
              className="text-zinc-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image
                src="/icons/email.png"
                alt="mail"
                width={32}
                height={32}
                className="w-8 h-8 transition-opacity hover:opacity-70"
              />
              </a>
            </div>

            {/* cpa plug */}
            <div className="w-full">
              <p className="text-zinc-300 text-sm mb-4">
                If you're a Sauder student and want to chat, feel free to book a time with me through COOL!
              </p>
                <a 
                href="https://mybcom.sauder.ubc.ca/career-experience/career-resources/cool-career-platform" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none' }}
                >
                <Button 
                  size="default" 
                  className="bg-transparent hover:bg-palette-medium-green text-white px-6 py-2.5 rounded-lg font-medium text-sm border border-palette-medium-green hover:border-transparent transition-colors"
                >
                  Access COOL
                </Button>
                </a>
            </div>
          </div>

          {/* right side - image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden bg-palette-tan">
              <Image
                src="/images/avatar.png"
                alt="Kevin's Avatar"
                width={480}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* experience */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-palette-medium-green">Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Experience key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-palette-medium-green">Portfolio</h2>

          {/* technical projects */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 text-palette-medium-green">Technical Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>

          {/* cases */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 text-palette-medium-green">Case Studies and Competitions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cases.map((caseStudy, index) => (
                <Case key={index} {...caseStudy} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* community */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-palette-medium-green">Community Involvement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {extracurriculars.map((activity, index) => (
              <Extracurricular key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}