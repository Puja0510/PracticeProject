import React, { useState, useMemo, useCallback } from 'react';

const ItemList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [items] = useState(['Apple', 'Banana', 'Orange', 'Grapes', 'Mango']);

    // Memoize the filtered list to avoid recalculating on each render
    const filteredItems = useMemo(() => {
        console.log('Filtering items...');
        return items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, items])

    // Memoize the search handler
    const handleSearch = useCallback((e) => { setSearchQuery(e.target.value); }, [])

    return (
        <div>
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
}

export default ItemList;