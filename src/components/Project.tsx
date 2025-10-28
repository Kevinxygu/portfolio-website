import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  imagePath: string;
  githubLink: string;
  tags: string[];
  prize?: string;
  description: string;
}

export function Project({ title, imagePath, githubLink, tags, prize, description }: ProjectProps) {
  return (
    <Card className="h-full group overflow-hidden transition-all duration-200 hover:scale-105 hover:rotate-1 border-[#36573F]">
      <CardContent className="p-0">
        <div className="relative h-96 overflow-hidden">
          <Image
            src={imagePath}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0" />
          
          {prize && (
            <div className="absolute top-4 left-4 bg-palette-light-green backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-palette-dark-green text-xs font-medium">{prize}</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-palette-light-green group-hover:text-white transition-colors">
              {title}
            </h3>
            <Link 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-fullnsition-colors"
            >
              <Image
                src="/icons/external-link.png"
                alt="external link icon"
                width={32}
                height={32}
                className="w-4 h-4"
              />
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-palette-tan font-mono px-2.5 py-1 rounded-md text-xs text-palette-dark-green font-light"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-white text-base leading-relaxed font-light">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}