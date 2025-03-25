// Sort a list of products based on price or name. 
// Avoid recalculating the sorted list unless the sorting criteria or the product list changes.

import React, { useState, useMemo } from 'react';

const ProductList = () => {
    const [sortBy, setSortBy] = useState('');
    const [products] = React.useState([
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Phone', price: 800 },
        { id: 3, name: 'Tablet', price: 600 },
      ]);

      const sortedProducts = useMemo(() => {
        return [...products].sort((a, b) => {
            if(sortBy === 'price'){
                return a.price - b.price
            } else if(sortBy === 'name'){
                return a.name.localeCompare(b.name);
            }
            return 0;
        })
      }, [sortBy, products])
    return (
        <div>
      <button onClick={() => setSortBy('price')}>Sort by Price</button>
      <button onClick={() => setSortBy('name')}>Sort by Name</button>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default ProductList;