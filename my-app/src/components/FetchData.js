import { useState, useEffect } from "react";

const DataFetcher = () => {
  const baseUrl = "https://dummyjson.com/products?limit=50&skip=";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(50);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (initialLoad = false) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}${skip}&select=title,price`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (!result || !result.products || result.products.length === 0) {
        setHasMore(false); // No more data to load
        return;
      }

      setData((prevData) => [...prevData, ...result.products]);

      if (!initialLoad) {
        setSkip((prevSkip) => prevSkip + 50); // Increase skip count for next fetch
      }
    } catch (err) {
      setError(err.message || "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Load first 10 items on component mount
  useEffect(() => {
    fetchData(true);
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data.map((item, index) => (
        <p key={index}>
          <strong>{item.title}</strong> - ${item.price}
        </p>
      ))}
      {loading && <p>Loading...</p>}
      {!loading && hasMore && <button onClick={fetchData}>Load More</button>}
    </div>
  );
};

export default DataFetcher;

