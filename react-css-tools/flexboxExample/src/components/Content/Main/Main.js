import React from "react";
import Gallery from "./Gallery/Gallery";
import Overview from "./Overview/Overview";
import Detail from "./Detail/Detail";
import "./Main.scss";
import Cta from "./Cta/Cta";

const Main = () => (
  <main className="hotel-view">
    <Gallery />
    <Overview />
    <Detail />
    <Cta />
  </main>
);

export default Main;
