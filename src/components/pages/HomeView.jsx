import { Carousel, Products } from "../";

export const HomeView = () => {
  return (
    <>
      <Carousel />
      <ContentBg>
        <Products />
      </ContentBg>
    </>
  );
};

const ContentBg = ({ children }) => {
  return <div style={{ background: "#f2f2f2" }}>{children}</div>;
};
