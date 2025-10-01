import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface ExperienceProps {
  title: string;
  imagePath: string;
  tags: Array<{
    name: string;
    icon?: string;
  }>;
  description: string;
  link?: string;
}

export function Experience({ title, imagePath, tags, description, link }: ExperienceProps) {
  const CardWrapper = link ? Link : 'div';
  
  return (
    <CardWrapper
      href={link || '/'}
      className={`block transition-all duration-200 ${link ? 'hover:scale-105 hover:rotate-1' : ''}`}
      {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Card className="border-[#36573F] h-full group overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-96 overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              width={465}
              height={615}
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
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-white border-2 border-white"
                >
                  {tag.icon && (
                  <Image
                    src={tag.icon}
                    alt={tag.name}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  )}
                  {tag.name}
                </div>
              ))}
            </div>
            
            <p className="text-white text-base leading-relaxed font-light">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}