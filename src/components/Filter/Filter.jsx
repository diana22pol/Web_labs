import React from 'react';
import Select from '../Select/Select';
import '../Filter/Filter.styles.css';
import SearchBar from '../SearchBar/SearchBar';

function Filter({ options, onApplyFilter, onSearchChange }) {
  const [selectedOptions, setSelectedOptions] = React.useState(options.map(() => 'all'));

  const handleOptionChange = (index) => (event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleApplyFilter = () => {
    onApplyFilter(selectedOptions);
  };

  return (
    <div className="filter_catalog">
      <div className="filters">
        {options.map((option, index) => (
          <nav key={index} className={`header_catalog_nav${index + 1}`}>
            <Select
              options={option}
              value={selectedOptions[index]}
              onChange={handleOptionChange(index)}
            />
          </nav>
        ))}
      </div>
      <SearchBar onSearchChange={onSearchChange} />
      <button className="button_apply" onClick={handleApplyFilter}>
        Apply
      </button>
    </div>
  );
}

export default Filter;
