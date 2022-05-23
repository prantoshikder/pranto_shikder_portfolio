import { useEffect } from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

const Home = () => {
  useEffect(() => {
    console.log("width", window.innerWidth);
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
