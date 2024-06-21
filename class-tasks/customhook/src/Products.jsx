import { useMemo, useState } from "react";

export const ProductFilterComponent = () => {
    const [products, setProducts] = useState([
      { id: 1, name: "Laptop" },
      { id: 2, name: "Smartphone" },
      { id: 3, name: "Tablet" },
      { id: 4, name: "Headphones" },
      { id: 5, name: "Smartwatch" },
      { id: 6, name: "Camera" },
      { id: 7, name: "Keyboard" },
      { id: 8, name: "Mouse" },
      { id: 9, name: "Speaker" },
      { id: 10, name: "Charger" },
    ]);
    const [query, setQuery] = useState("");
    const [darkMode, setDarkMode] = useState(false); // New state for dark mode
  
    const filteredProducts = useMemo(() => {
      console.log("searching products");
      return products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }, [products, query]);
  
    const toggleDarkMode = () => setDarkMode(!darkMode); // Function to toggle dark mode
  
    return (
      <div
        style={{
          padding: 16,
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <input
          type="text"
          placeholder="Search for a product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  