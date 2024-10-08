import React, { createContext, useState, useEffect } from "react";
import productsData from "../data/Products.json";
// Импортируем данные о прод

// контекст
export const ProductDataContext = createContext();

// провайдер контекста
export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // данные о продуктах при монтировании комп
  useEffect(() => {
    // любая логикя загрузки данных, API или файл
    setProducts(productsData); // данные о продуктах из файла
  }, []);

  return (
    <ProductDataContext.Provider value={{ products }}>
      {children}
    </ProductDataContext.Provider>
  );
};
