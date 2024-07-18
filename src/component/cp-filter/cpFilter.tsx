import React, { useState, useEffect } from 'react';
import styles from './cpFilter.module.scss';

interface Props {
  onFilterChange: (filters: string[]) => void;
}

const CpFilter: React.FC<Props> = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    setSelectedFilters(prevFilters => {
      if (checked && !prevFilters.includes(value)) {
        return [...prevFilters, value]; // Add filter if checked and not already in the array
      } else {
        return prevFilters.filter(filter => filter !== value); // Remove filter if unchecked
      }
    });
  };

  // Notify parent component of filter change when selectedFilters state changes
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  // Dummy categories (to be replaced with actual categories from API or data source)
  const categories = [
    { id: 'accessories', label: 'Accessories' },
    { id: 'giftcard', label: 'Gift Card' },
    { id: 'snowboard', label: 'Snowboard' }
  ];

  return (
    <div className={`${styles['Filter-wrap']}`}>
      <fieldset>
        <div className={`${styles['filter-subHeading']}`}>Categories</div>
        <ul className={`${styles['filter-list']}`}>
          {categories.map(category => (
            <li key={category.id} className={`${styles['filter-item']}`}>
              <div className={`${styles["bs-checkbox"]}`}>
                <input
                  className={`${styles["checkbox-input"]}`}
                  type="checkbox"
                  name="categories-type"
                  id={category.id}
                  value={category.id}
                  checked={selectedFilters.includes(category.id)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={category.id}>{category.label}</label>
              </div>
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
};

export default CpFilter;
