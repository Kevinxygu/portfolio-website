import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isCompact?: boolean;
  onToggleCompact?: () => void;
}

export function Navbar({ isCompact, onToggleCompact }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Cases', href: '#cases' },
    { label: 'Community', href: '#community' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      if (isCompact) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-palette-dark-green/95 backdrop-blur-sm border-b border-palette-medium-green/20 ${!isCompact ? 'px-8 md:px-16 lg:px-24' : ''}`}>
      <div className={`max-w-7xl mx-auto ${isCompact ? 'px-4 md:px-8 lg:px-12' : ''}`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('#home')}
            className="text-xl font-bold text-palette-medium-green hover:text-palette-light-green transition-colors"
          >
            Kevin Gu
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-palette-medium-green transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* Compact Toggle */}
            <button
              onClick={onToggleCompact}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-palette-medium-green/40 text-sm font-medium text-palette-medium-green hover:bg-palette-medium-green/10 transition-all"
              title={isCompact ? 'Switch to full view' : 'Switch to compact view'}
            >
              {isCompact ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>Toggle Expanded View</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  <span>Toggle Compact View</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile: Compact toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onToggleCompact}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-palette-medium-green/40 text-xs font-medium text-palette-medium-green hover:bg-palette-medium-green/10 transition-all"
            >
              {isCompact ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>Full</span>
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  <span>Compact</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-palette-medium-green transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-palette-medium-green/20">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-white hover:text-palette-medium-green hover:bg-palette-medium-green/10 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
