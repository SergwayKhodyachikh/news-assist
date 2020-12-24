import React from "react";
import About from "./About/About";
import Features from "./Features/Features";
import Tours from "./Tours/Tours";
import Stories from "./Stories/Stories";
import "./Main.scss";
import Book from "./Book/Book";

const Main = () => (
  <main>
    <About />
    <Features />
    <Tours />
    <Stories />
    <Book />
  </main>
);

export default Main;
