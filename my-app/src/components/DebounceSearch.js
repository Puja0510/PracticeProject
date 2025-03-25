// Debouncing ensures that the search API is not called on every keystroke, 
// but only after the user has stopped typing for a short duration (300ms in this case).

import React, { useState, useEffect } from 'react';

const DebouncedSearch = () => {

    const [query, setQuery] = useState('')
    const [debounceQuery, setDebouncedQuery] = useState(query)

    // Debounce logic using useEffect
  useEffect(() => {
    // Set a timer to update the debounced query after 300ms
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000); // Wait 300ms after the user stops typing

    // Cleanup function: Clear the timeout when the component re-renders
    // or the query state changes, preventing unnecessary updates
    return () => clearTimeout(handler);
  }, [query]); // This effect depends on 'query'

  // Effect to handle side effects when the debounced query changes
  useEffect(() => {
    if (debounceQuery) {
      console.log('Search API call with query:', debounceQuery);
      // Place API call here using 'debouncedQuery' as the search parameter
    }
  }, [debounceQuery]); // This effect depends on 'debouncedQuery'


    return (
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
    )
}

export default DebouncedSearch;