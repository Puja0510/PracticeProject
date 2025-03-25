// Rendering Large Lists (Virtualization)
// Render a list of thousands of items, ensuring efficient rendering and preventing unnecessary recalculations.

import React from "react";

const LargeList = () => {
    const [filter, setFilter] = React.useState('');
    const [items] = React.useState(() =>
      Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)
    );
  
    const filteredItems = React.useMemo(() => {
      console.log('Filtering items...');
      return items.filter((item) => item.includes(filter));
    }, [filter, items]);
  
    return (
      <div>
        <input
          type="text"
          placeholder="Filter items..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredItems.slice(0, 100).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Displaying first 100 items out of {filteredItems.length} filtered items.</p>
      </div>
    );
  };

  export default LargeList;

