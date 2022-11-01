import "./MainContainer.css";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { isMobile, MobileView } from "react-device-detect";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import MainPortfolioPage from "../MainPortfolioPage/MainPortfolioPage";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/resume";

export default function MainContainer() {
  const [height, setHeight] = useState(window.innerHeight);

  function ChangeHeight() {
    height === 0 ? setHeight(window.innerHeight) : setHeight(0);
  }

  return (
    <>
      <AnimateHeight
        onWheel={() => {
          setHeight(0);
        }}
        id="resizeableEmptyDiv"
        duration={500}
        height={height}
        className="coverArt"
      >
        <div
          aria-expanded={height !== 0}
          aria-controls="resizeableEmptyDiv"
          onWheel={ChangeHeight}
        >
          <div className="container">
            <div
              className="row"
              style={{
                paddingTop: isMobile ? "25%" : "15%",
                paddingLeft: isMobile ? "30%" : "40%",
              }}
            >
              <div className="col-md-12">
                <a
                  href="https://www.linkedin.com/in/xavieralejandrolozano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={(isMobile ? "fa-3x" : "fa-4x") + " me-3"}
                >
                  <i
                    className="fab fa-linkedin"
                    style={{ color: "#0082ca", paddingRight: "5%" }}
                  ></i>
                </a>
                <a
                  href="https://github.com/Xavi-Alejandro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={(isMobile ? "fa-3x" : "fa-4x") + " me-3"}
                >
                  <i
                    className="fab fa-github"
                    style={{ color: "#333333", paddingRight: "5%" }}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/xavieralejandro_l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={(isMobile ? "fa-3x" : "fa-4x") + " me-3"}
                >
                  <i
                    className="fab fa-square-instagram"
                    style={{ color: "#ac2bac", paddingRight: "5%" }}
                  ></i>
                </a>
              </div>
              <div className="col-md-12">
                <p
                  className="h1"
                  style={{
                    color: "black",
                    fontFamily: "Pacifico, cursive",
                    fontSize: isMobile ? "7vw" : "4vw",
                  }}
                >
                  Xavier Alejandro
                </p>
              </div>
              <div className="col-md-12">
                <p
                  style={{
                    color: "black",
                    fontFamily: "Roboto",
                    fontSize: isMobile ? "5vw" : "3vw",
                  }}
                >
                  Full-stack Web developer
                </p>
              </div>
            </div>
            <div className="row">
              <MobileView>
                <div className="col-md-12">
                  <div className="text-center">
                    <p className="stickToBottom fw-bold" onClick={()=>{setHeight(0)}}>Tap to minimize</p>
                  </div>
                </div>
              </MobileView>
            </div>
          </div>
        </div>
      </AnimateHeight>

      {/* add main portfolio page here */}
      <BrowserRouter>
        <MainPortfolioPage ChangeHeight={ChangeHeight} />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
