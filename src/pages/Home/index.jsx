import { useEffect } from "react";
import AboutUs from "../../components/about/AboutUs";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

const Home = () => {
  useEffect(() => {
    console.log("width", window.innerWidth);
  }, []);
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;
