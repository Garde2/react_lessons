import "./App.css";
import React from "react";

import { ThemeContextLightDark } from "./contexts/cont_task";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

// import ProductProvider from "./contexts/ProductContext";
// import ProductList2Test from "./components/ProductList2Test";
// import ProductDetail2Test from "./components/ProductDetail2Test";
import { useState } from "react";

const initialTheme = "light";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Product 1 Content",
    price: "100 руб.",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 Content",
    price: "200 руб.",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3 Content",
    price: "300 руб.",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Product 4 Content",
    price: "400 руб.",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Product 5 Content",
    price: "500 руб.",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Product 6 Content",
    price: "600 руб.",
  },
  {
    id: 7,
    name: "Product 7",
    description: "Product 7 Content",
    price: "700 руб.",
  },
  {
    id: 8,
    name: "Product 8",
    description: "Product 8 Content",
    price: "800 руб.",
  },
  {
    id: 9,
    name: "Product 9",
    description: "Product 9 Content",
    price: "900 руб.",
  },
];

const App = () => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContextLightDark.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Header />
        <Router>
          <div>
            <h2> Магаз и статьи</h2>
            <Routes>
              <Route
                path="/page/:pageNumber"
                element={<ProductList products={products} />}
              />
              <Route
                path="/product/:productId"
                element={<ProductDetail products={products} />}
              />
              <Route path="/" element={<ProductList products={products} />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeContextLightDark.Provider>
  );
};

export default App;
