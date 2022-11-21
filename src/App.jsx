import {
  Header,
  HomeView,
  Footer,
  HistoryView,
  ProductView,
} from "./components";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <MaxWd>
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomeView />} />
          <Route path="history" element={<HistoryView />} />
          <Route path="/:id" element={<ProductView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </MaxWd>
  );
};

const MaxWd = ({ children }) => {
  return (
    <div style={{ maxWidth: "1900px", margin: "0 auto", position: "relative" }}>
      {children}
    </div>
  );
};
