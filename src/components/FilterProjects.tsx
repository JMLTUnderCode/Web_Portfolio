import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { CATEGORIES } from '../constants';
import { ProjectsList } from '../components/ProjectsList';

export function FilterProjects() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [ShowFilters, setShowFilters] = React.useState(false);

  const handleSelectionFilter = (category : string) => {
    setSelectedCategory(category);
    setShowFilters(false)
  }

  const handleOpenFilters = () => {
    setShowFilters(!ShowFilters);
  }

  return (
    <>
      <ul className="filter-list">
        {Object.values(CATEGORIES).map((cat: string) => (
          <li className="filter-item" key={cat}>
            <button
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
              data-filter-btn
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <div className="filter-select-box">
        <button
          className={`filter-select ${ShowFilters ? 'active' : ''}`}
          data-select
          onClick={handleOpenFilters}
        >
          <div className="select-value" data-selecct-value>
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </div>
          <div className="select-icon">
            <IoChevronDown />
          </div>
        </button>
        {ShowFilters && (
          <ul className="select-list">
            {Object.values(CATEGORIES).map((cat) => (
              <li className="select-item" key={cat}>
                <button
                  data-select-item
                  onClick={() => handleSelectionFilter(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ProjectsList category={selectedCategory} />
    </>
  );
};