import { useState } from "react";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";

export const useProducts = () => {
  const [productsDb, setProductsDb] = useState([]);
  const [loading, setLoading] = useState(false);

  if (productsDb == "") {
    const starCountRef = ref(database, "products");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setProductsDb(data);
      setLoading(true);
    });
  }
  return { productsDb, loading };
};
