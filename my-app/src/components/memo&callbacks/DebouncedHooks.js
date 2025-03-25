// Custom Hook for Debounced Search
// Problem:
// Implement a custom hook for debounced input updates.

import React from "react";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
  
    React.useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => clearTimeout(handler);
    }, [value, delay]);
  
    return debouncedValue;
  };
  
  const DebouncedSearch = () => {
    const [search, setSearch] = React.useState('');
    const debouncedSearch = useDebounce(search, 500);
  
    React.useEffect(() => {
      if (debouncedSearch) {
        console.log('Search API called with:', debouncedSearch);
      }
    }, [debouncedSearch]);
  
    return (
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  };

  export default DebouncedSearch;