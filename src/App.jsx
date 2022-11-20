import { Header, HomeView, Footer } from "./components";

export const App = () => {
  return (
    <MaxWd>
      <Header />
      <HomeView />
      <Footer />
    </MaxWd>
  );
};

const MaxWd = ({ children }) => {
  return <div style={{ maxWidth: "1900px", margin: "0 auto" }}>{children}</div>;
};
