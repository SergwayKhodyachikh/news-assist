import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Realtors from "./Realtors/Realtors";
import Features from "./Features/Features";
import Homes from "./Homes/Homes";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
import Story from "./Story/Story";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
