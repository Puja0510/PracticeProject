import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
      const data = await res.json();

      if (data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
        setSkip((prev) => prev + 10);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Initial fetch
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
          <strong>{item.title}</strong> - ${item.price}
        </div>
      ))}
      {hasMore && (
        <button onClick={fetchProducts} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default ProductList;
