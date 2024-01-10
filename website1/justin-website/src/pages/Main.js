import React, { useEffect } from "react";
import Greet from '../components/Greet';
import Section from "../components/Section";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div className="App">
        <Greet />
        <NavBar />
        <Section name="About" id="about">testing</Section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Section name="Experience" id="exp">testing</Section>
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  );
};

export default Main;
