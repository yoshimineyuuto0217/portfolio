import React from "react";
import List from "./List";
import AboutMe from "./AboutMe";
import Contact from "./Contact";


const MainView = () => {
  return (
    <>
      <div className="view">
        <img src="/images/big-photo0000-2780.jpg" alt="メインの画像です" />
      </div>
        <List/>
        <AboutMe/>
        <Contact/>
    </>
  );
};

export default MainView;

