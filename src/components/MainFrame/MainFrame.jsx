// MainFrame.jsx
import React from "react";
import "./MainFrame.css";
import NavHeaderFrame from "../NavHeaderFrame/NavHeaderFrame"; // パス修正
import AboutReactFrame from "../AboutReactFrame/AboutReactFrame";

function MainFrame() {
  return (
    <div className="mainFrame">
      <NavHeaderFrame />
      <AboutReactFrame />
    </div>
  );
}

export default MainFrame;


