import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface CaseProps {
  title: string;
  imagePath: string;
  companyLogoPath: string;
  companyName: string;
  prize?: string;
  description: string;
}

export function Case({ title, imagePath, companyLogoPath, companyName, prize, description }: CaseProps) {
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
              <span className="text-palette-dark-green text-sm font-medium">🏆 - {prize}</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-palette-light-green group-hover:text-white transition-colors">
              {title}
            </h3>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <Image
              src={companyLogoPath}
              alt={companyName}
              width={300}
              height={300}
              className="w-16 h-16 object-contain rounded-xl"
            />
            <span className="text-palette-tan text-l font-light pl-2">{companyName}</span>
          </div>=
          
          <p className="text-white text-base leading-relaxed font-light">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}