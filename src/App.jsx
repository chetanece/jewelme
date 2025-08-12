import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PromiseSection from "./components/PromiseSection";
import MyJewelPlan from "./components/MyjewelPlan";
import Footer from "./components/footer";
import Shop from "./components/shop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PromiseSection />
      <MyJewelPlan />
      <Shop/>
      <Footer />
    </>
  );
}

export default App;
