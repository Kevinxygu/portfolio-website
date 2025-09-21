import { Experience } from '@/components/Experience';
import { Project } from '@/components/Project';
import { Case } from '@/components/Case';
import { Extracurricular } from '@/components/Extracurricular';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import data from '../constants/data.json' 

export default function HomePage() {
  
  const experiences = data.experiences; 

  const projects = data.projects;

  const cases = data.cases;

  const extracurriculars = data.extracurriculars;

  return (
    <div className="min-h-screen bg-palette-dark-green text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-2">
              <Image
                src="/avatar.jpg"
                alt="Kevin's Avatar"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white mb-2">Thanks for stopping by!</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-palette-medium-green">
              I'm Kevin
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              I use software engineering, Swift, and accounting towards making the world's population happy.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-palette-medium-green hover:bg-palette-light-green text-white px-8"
            >
              Available
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 px-8"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-palette-medium-green">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Experience key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-palette-medium-green">Portfolio</h2>

          {/* Technical Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-palette-medium-green">Technical Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-palette-medium-green">Case Studies and Competitions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map((caseStudy, index) => (
                <Case key={index} {...caseStudy} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-palette-medium-green">Community Involvement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <Extracurricular key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}