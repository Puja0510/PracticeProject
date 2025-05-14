import React, { useState, useMemo } from "react";
import { useFetch } from "./useFetch";



const FetchData = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [selectedCategory, setSelectedCategory] = useState("");

  const category = useMemo(() => {
    if (!data) return [];
    const allCategories = data.products.map((p) => p.category);
    return [...new Set(allCategories)];
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    return data.products.filter((p) => p.category === selectedCategory);
  }, [data, selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">--Choose Category--</option>
        {category.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Products in "{selectedCategory}"</h3>
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FetchData;
