import { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/products/ProductContext";

export const useCategories = () => {
  const [categoriesItems, setCategoriesItems] = useState([]);

  const { products } = useContext(ProductContext);

  useEffect(() => {
    if (products != "") {
      products.map(({ category }) => {
        return categoriesItems.push(category);
      });
    }
  }, [products]);

  const impCategoriesItems = [...new Set(categoriesItems)];

  return { impCategoriesItems };
};
