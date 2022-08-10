import React from "react";
import "./App.scss";
import NavBarComponent from "./components/Header/NavBar";
import HeroComponent from "./components/Hero/Hero";
import FooterComponent from "./components/footer/FooterComponent";
import { articleObjects, whyChooseUsObject } from "./objects";
function App() {
  return (
    <>
      <div className="App">
        <div
          className="top-nav"
          style={{ position: "fixed", width: "100%", zIndex: 10, top: 0 }}
        >
          <NavBarComponent />
        </div>
        <HeroComponent />
        <section className="why-us">
          <div className="box-flex">
            <h1>Why choose Easybank?</h1>

            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>

            <div className="card-flex">
              {whyChooseUsObject.map((card, index) => {
                const { img, header, text } = card;
                return (
                  <div className="card" key={`card${index}`}>
                    <img src={img} alt="" />
                    <h1> {header}</h1>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="articles">
          <div className="box-flex">
            <h1> Latest Articles</h1>
            <div className="article-flex">
              {articleObjects.map((article, index) => {
                const { img, header, text, author } = article;

                return (
                  <div className="article-box" key={`article${index}`}>
                    <img src={img} alt="" />
                    <div className="text-div">
                      <span>By {author}</span>
                      <h1>{header}</h1>
                      <p>{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FooterComponent />
      </div>
    </>
  );
}

export default App;
