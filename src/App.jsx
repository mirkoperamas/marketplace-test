import { Header, HomeView, Footer, HistoryView } from "./components";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { ProductProvider } from "./contexts/products/ProductProvider";
import { CartProvider } from "./contexts/cart/CartProvider";
import { AuthProvider } from "./contexts/auth/AuthProvider";

export const App = () => {
  return (
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <MaxWd>
            <Header />
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<HomeView />} />
                <Route path="history" element={<HistoryView />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
            <Footer />
          </MaxWd>
        </CartProvider>
      </AuthProvider>
    </ProductProvider>
  );
};

const MaxWd = ({ children }) => {
  return (
    <div style={{ maxWidth: "1900px", margin: "0 auto", position: "relative" }}>
      {children}
    </div>
  );
};
