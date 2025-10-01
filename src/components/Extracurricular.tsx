import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface ExtracurricularProps {
  title: string;
  description: string;
  imagePath: string;
  roles: string[];
  link?: string;
}

export function Extracurricular({ title, description, imagePath, roles, link }: ExtracurricularProps) {
  const CardWrapper = link ? Link : 'div';

  return (
    <CardWrapper
      href={link || '/'}
      className={`block transition-all duration-200 ${link ? 'hover:scale-105 hover:rotate-1' : ''}`}
      {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Card className="h-full group overflow-hidden border-[#36573F]">
        <CardContent className="p-0">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0" />
          </div>
          
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-palette-light-green group-hover:text-white transition-colors">
                {title}
              </h3>
            </div>
            
            <p className="text-white text-sm leading-relaxed mb-4">
              {description}
            </p>
            
            <div className="space-y-2">
              <h4 className="text-palette-light-green font-medium text-sm">Roles:</h4>
              <ul className="space-y-1">
                {roles.map((role, index) => (
                  <li key={index} className="text-white text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-palette-medium-green rounded-full mr-3 flex-shrink-0"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}