import { useEffect, useState } from "react";
import { useProducts } from "./useProducts";

export const useCategories = () => {
  const [categoriesItems, setCategoriesItems] = useState([]);
  const { productsDb } = useProducts();

  useEffect(() => {
    if (productsDb != "") {
      productsDb.map(({ category }) => {
        return categoriesItems.push(category);
      });
    }
  }, [productsDb]);

  const impCategoriesItems = [...new Set(categoriesItems)];

  return { impCategoriesItems };
};
