import { useEffect, useRef, useState } from "react";
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    // Clear previous timer
    clearTimeout(debounceTimeout.current);

    // Set a new debounce timer
    debounceTimeout.current = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setResults([]);
        });
    }, 500); // 500ms debounce

    // Clean up on unmount or new effect
    return () => clearTimeout(debounceTimeout.current);
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Product Search (with Debounce)</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          results.map((product) => (
            <p key={product.id} style={{ margin: "5px 0" }}>
              🛍️ {product.title}
            </p>
          ))
        ) : query.trim() !== "" ? (
          <p>Loading or no results...</p>
        ) : null}
      </div>
    </div>
  );
}

export default App
