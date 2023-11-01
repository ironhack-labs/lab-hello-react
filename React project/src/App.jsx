import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import declarativeLogo from "./assets/icon1.png";
import ComponentLogo from "./assets/icon2.png";
import SingleWayLogo from "./assets/icon3.png";
import JSXLogo from "./assets/icon4.png";
import topMenu from "./assets/menu-top-xs.png";
import "./App.css";
import Div from "./Components/Div";
import Nav from "./Components/Nav";
import Title from "./Components/Title";
import Paragraph from "./Components/Paragraph";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Nav ironhackLogo={ironhackLogo} topMenu={topMenu}></Nav>
      <Div></Div>
      <Title></Title>
      <Paragraph></Paragraph>
      <Button></Button>
      <Container>
        <Card
          declarativeLogo={declarativeLogo}
          ComponentLogo={ComponentLogo}
          SingleWayLogo={SingleWayLogo}
          JSXLogo={JSXLogo}
        ></Card>
      </Container>

      {/*<div className="App">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      */}
    </>
  );
}

export default App;
