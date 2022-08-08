import React from "react";
import "./App.scss";
import NavBarComponent from "./components/Header/NavBar";
import "./sass/sass-style";
import HeroComponent from "./components/Hero/Hero";
import cardImage from "./assets/images/icon-onboarding.svg";
import articleImage from "./assets/images/image-currency.jpg";
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
              <div className="card">
                {/* <div className="image-div"> */}
                <img src={cardImage} alt="" />
                {/* </div> */}
                <h1> Online Banking</h1>
                <p>
                  {" "}
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
              <div className="card">
                {/* <div className="image-div"> */}
                <img src={cardImage} alt="" />
                {/* </div> */}
                <h1> Online Banking</h1>
                <p>
                  {" "}
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
              <div className="card">
                {/* <div className="image-div"> */}
                <img src={cardImage} alt="" />
                {/* </div> */}
                <h1> Online Banking</h1>
                <p>
                  {" "}
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
              <div className="card">
                {/* <div className="image-div"> */}
                <img src={cardImage} alt="" />
                {/* </div> */}
                <h1> Online Banking</h1>
                <p>
                  {" "}
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="articles">
          <div className="box-flex">
            <h1> Latest Articles</h1>
            <div className="article-flex">
              <div className="article-box">
                <img src={articleImage} alt="" />
                <div className="text-div">
                  <span>By Claire Robinson</span>
                  <h1> Receive money in any currency with no fees</h1>
                  <p>
                    {" "}
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>
              <div className="article-box">
                <img src={articleImage} alt="" />
                <div className="text-div">
                  <span>By Claire Robinson</span>
                  <h1> Receive money in any currency with no fees</h1>
                  <p>
                    {" "}
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>
              <div className="article-box">
                <img src={articleImage} alt="" />
                <div className="text-div">
                  <span>By Claire Robinson</span>
                  <h1> Receive money in any currency with no fees</h1>
                  <p>
                    {" "}
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>
              <div className="article-box">
                <img src={articleImage} alt="" />
                <div className="text-div">
                  <span>By Claire Robinson</span>
                  <h1> Receive money in any currency with no fees</h1>
                  <p>
                    {" "}
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
