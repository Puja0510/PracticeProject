import React, { useEffect, useRef, useState } from "react";

const InfinitePaginationToggleApp = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState("infinite") // infinite or pagination
    const loaderRef = useRef(null);

    const ITEMS_PER_PAGE = 10;

    const fetchItems = async (pageNum, reset = false) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800));

        const newItems = Array.from({ length: ITEMS_PER_PAGE}, (_,i) => ({
            id: (pageNum - 1) * ITEMS_PER_PAGE + i + 1,
            name: `Item ${(pageNum - 1) * ITEMS_PER_PAGE + i + 1}`,
        }))

        setItems((prev) => (reset ? newItems : [...prev, ...newItems]));
        setLoading(false);
    };

    // load data when page change
    useEffect(() => {
        if(mode === 'infinite'){
            fetchItems(page)
        } else {
            fetchItems(page, true)
        }
    }, [page, mode])

    // Intersection Observer for infinite scroll

    useEffect(() => {
        if(mode !== 'infinite') return;

        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if(first.intersecting && !loading){
                    setPage((prev) => prev + 1)
                }
            },
            { threshold: 1}
        );

        const currentLoader = loaderRef.current;
        if(currentLoader) observer.observer(currentLoader)

            return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
    }, [loading, model])

      const toggleMode = () => {
    setPage(1);
    setItems([]);
    setMode((prev) => (prev === "infinite" ? "pagination" : "infinite"));
  };


return(
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h2>Infinite Scroll / Pagination Toggle</h2>

      {/* Toggle Button */}
      <button onClick={toggleMode} style={{ marginBottom: 20 }}>
        Switch to {mode === "infinite" ? "Pagination" : "Infinite Scroll"}
      </button>

      {/* Item List */}
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              listStyle: "none",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      {mode === "pagination" && (
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          >
            Prev
          </button>
          <span>Page {page}</span>
          <button onClick={() => setPage((p) => p + 1)}>Next</button>
        </div>
      )}

      {/* Loader for Infinite Scroll */}
      {mode === "infinite" && (
        <>
          {loading && <p>Loading more items...</p>}
          <div ref={loaderRef} style={{ height: 20 }} />
        </>
      )}
    </div>
)

}

export default InfinitePaginationToggleApp;