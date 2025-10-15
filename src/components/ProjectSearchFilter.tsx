import { useState } from 'react';
import { Search } from 'lucide-react';

interface Project {
  title: string;
  imagePath: string;
  githubLink: string;
  tags: string[];
  prize?: string;
  description: string;
}

interface ProjectSearchFilterProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

export function ProjectSearchFilter({ projects, onFilterChange }: ProjectSearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    filterProjects(value);
  };

  const filterProjects = (search: string) => {
    const filtered = projects.filter(project => {
      const searchLower = search.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(searchLower);
      const descriptionMatch = project.description.toLowerCase().includes(searchLower);
      const tagMatch = project.tags.some(tag => 
        tag.toLowerCase().includes(searchLower)
      );
      
      return titleMatch || descriptionMatch || tagMatch;
    });
    
    onFilterChange(filtered);
  };

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
        <input
          type="text"
          placeholder="Search projects by name, description, or technology..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-palette-medium-green/10 border border-palette-medium-green/30 rounded-lg text-white focus:outline-none focus:border-palette-medium-green focus:ring-1 focus:ring-palette-medium-green"
        />
      </div>

      {/* Active Search Indicator */}
      {searchTerm !== '' && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm text-zinc-400">
            Searching for: <span className="text-palette-light-green font-medium">{searchTerm}</span>
          </span>
          <button
            onClick={() => handleSearch('')}
            className="text-xs text-palette-medium-green hover:text-palette-light-green underline"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}