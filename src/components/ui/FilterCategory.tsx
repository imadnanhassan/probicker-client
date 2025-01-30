import React, { useState } from 'react';

interface FilterCategoryProps {
  category: string;
  options: string[];
  toggleFilter: (category: string, option: string) => void;
  selectedFilters: { [key: string]: string[] };
}

const FilterCategory: React.FC<FilterCategoryProps> = ({
  category,
  options,
  toggleFilter,
  selectedFilters,
}) => {
  const [isExpanded, setIsExpanded] = useState(true)
  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={() => setIsExpanded(prev => !prev)}
      >
        <h3 className="text-sm font-semibold">{category}</h3>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      <hr className="mb-3" />
      {/* {isExpanded && (
        <div className="space-y-2">
          {options.map(option => (
            <div key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`${category}-${option}`}
                checked={selectedFilters[category]?.includes(option) || false}
                onChange={() => toggleFilter(category, option)}
                className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-2 focus:ring-blue-300"
              />
              <label
                htmlFor={`${category}-${option}`}
                className="text-sm text-gray-800 cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )} */}
    </div>
  )
}

export default FilterCategory;