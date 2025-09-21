import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';
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
    <Card className="bg-zinc-900/50 border-zinc-800 h-full group overflow-hidden transition-all duration-200 hover:scale-105 hover:rotate-1">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imagePath}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
          
          {prize && (
            <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-black text-sm font-medium">🏆 {prize}</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <Link 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Github className="h-4 w-4 text-zinc-300 hover:text-white" />
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-zinc-800/60 px-2.5 py-1 rounded-md text-xs text-zinc-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}