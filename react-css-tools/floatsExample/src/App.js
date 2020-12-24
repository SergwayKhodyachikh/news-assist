import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./components/App.scss";
import Popup from "./components/Popup/Popup";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Main />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
