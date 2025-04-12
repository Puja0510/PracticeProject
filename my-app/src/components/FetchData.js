import { useState, useEffect } from "react";

const DataFetcher = () => {
  // Base API URL for fetching products
  const baseUrl = "https://dummyjson.com/products?limit=50&skip=";

  // State variables
  const [data, setData] = useState([]); // Stores fetched product data
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Stores error message (if any)
  const [skip, setSkip] = useState(50); // Number of items to skip for pagination
  const [hasMore, setHasMore] = useState(true); // Determines if more data is available

  // Function to fetch data from API
  const fetchData = async (initialLoad = false) => {
    setLoading(true);
    setError(null);

    try {
      // Fetch data from API with dynamic skip value
      const response = await fetch(`${baseUrl}${skip}&select=title,price`);

      // If response is not OK, throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      // If no products are returned, disable "Load More" button
      if (!result || !result.products || result.products.length === 0) {
        setHasMore(false);
        return;
      }

      // Append new products to existing data
      setData((prevData) => [...prevData, ...result.products]);

      // Increase skip value for next API call (except on initial load)
      if (!initialLoad) {
        setSkip((prevSkip) => prevSkip + 50);
      }
    } catch (err) {
      // Handle API errors
      setError(err.message || "Unknown error occurred");
    } finally {
      // Set loading state to false after API call
      setLoading(false);
    }
  };

  // Fetch initial 50 products on component mount
  useEffect(() => {
    fetchData(true);
  }, []);

  return (
    <div>
      {/* Display error message if any */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Display fetched product data */}
      {data.map((item, index) => (
        <p key={index}>
          <strong>{item.title}</strong> - ${item.price}
        </p>
      ))}

      {/* Show loading message while fetching data */}
      {loading && <p>Loading...</p>}

      {/* Load More button - Appears only if more data is available */}
      {!loading && hasMore && <button onClick={fetchData}>Load More</button>}
    </div>
  );
};

export default DataFetcher;
