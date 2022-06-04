import React from "react";
import Announcement from "../Components/Announcement";
import Catergories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catergories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
