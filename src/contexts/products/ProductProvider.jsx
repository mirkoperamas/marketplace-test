import { useReducer, useState } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import { database } from "../../config/firebase";
import { ref, onValue } from "firebase/database";

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    const starCountRef = ref(database, "products");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setLoading(true);
      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
