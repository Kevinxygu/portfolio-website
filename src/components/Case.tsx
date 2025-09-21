import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
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
          
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
            <Image
              src={companyLogoPath}
              alt={companyName}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-palette-light-green group-hover:text-white transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-all duration-200" />
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <Image
              src={companyLogoPath}
              alt={companyName}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span className="text-zinc-300 text-sm font-medium">{companyName}</span>
          </div>
          
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}