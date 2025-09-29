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
      <section className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-2 ring-zinc-700">
                <Image
                  src="/avatar.jpg"
                  alt="Kevin's Avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-zinc-400 text-sm mb-3">Thanks for stopping by!</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                I'm Kevin
              </h1>
              <p className="text-base text-zinc-300 mb-8 max-w-xl">
                I use software engineering, Swift, and accounting towards making the world's population happy.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button 
                size="default" 
                className="bg-[#4a9d83] hover:bg-[#5aad93] text-white px-6 py-2.5 rounded-lg font-medium text-sm"
              >
                Available
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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

      {/* Portfolio Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#4a9d83]">Portfolio</h2>

          {/* Technical Projects */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 text-zinc-300">Technical Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 text-zinc-300">Case Studies and Competitions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cases.map((caseStudy, index) => (
                <Case key={index} {...caseStudy} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#4a9d83]">Community Involvement</h2>
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