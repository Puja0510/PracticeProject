import React, { useEffect, useRef, useState } from "react";

const InfiniteScrollApp = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);
  
  // Current page number
  const [page, setPage] = useState(1);
  
  // Loading state to avoid duplicate fetches
  const [loading, setLoading] = useState(false);
  
  // Ref to the loader div at the bottom of the list
  const loaderRef = useRef(null);

  // Simulate an API call to fetch items
  const fetchItems = async (pageNum) => {
    setLoading(true); // Start loading

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate mock data for the current page
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: (pageNum - 1) * 10 + i + 1,
      name: `Item ${(pageNum - 1) * 10 + i + 1}`,
    }));

    // Append new items to the existing list
    setItems((prev) => [...prev, ...newItems]);
    
    setLoading(false); // End loading
  };

  // Setup IntersectionObserver to detect when loader is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        // If the loader is visible and not loading, fetch next page
        if (firstEntry.isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        threshold: 1.0, // Fire callback when the loader is 100% in view
      }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader); // Start observing the loader
    }

    // Cleanup the observer on unmount
    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loading]); // Re-run if loading changes

  // Fetch items whenever the page number changes
  useEffect(() => {
    fetchItems(page);
  }, [page]);

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Infinite Scroll Example</h2>

      {/* Render all the items */}
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ccc",
              listStyle: "none",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Show loading text if loading */}
      {loading && <p>Loading more items...</p>}

      {/* Dummy div to act as the intersection trigger */}
      <div ref={loaderRef} style={{ height: "20px" }} />
    </div>
  );
};

export default InfiniteScrollApp;
