import { Header, HomeView, Footer, HistoryView } from "./components";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import ProductState from "./contexts/products/ProductState";

export const App = () => {
  return (
    <ProductState>
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
    </ProductState>
  );
};

const MaxWd = ({ children }) => {
  return (
    <div style={{ maxWidth: "1900px", margin: "0 auto", position: "relative" }}>
      {children}
    </div>
  );
};
