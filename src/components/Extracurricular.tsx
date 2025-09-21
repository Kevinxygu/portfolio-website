import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface ExtracurricularProps {
  title: string;
  description: string;
  imagePath: string;
  roles: string[];
}

export function Extracurricular({ title, description, imagePath, roles }: ExtracurricularProps) {
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
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-palette-light-green group-hover:text-white transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-all duration-200" />
          </div>
          
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="space-y-2">
            <h4 className="text-zinc-300 font-medium text-sm">Previous Roles:</h4>
            <ul className="space-y-1">
              {roles.map((role, index) => (
                <li key={index} className="text-zinc-400 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}