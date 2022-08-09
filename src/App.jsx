import React from "react";
import "./App.scss";
import NavBarComponent from "./components/Header/NavBar";
import HeroComponent from "./components/Hero/Hero";
import currencyImage from "./assets/images/image-currency.jpg";
import confettiImage from "./assets/images/image-confetti.jpg";
import planeImage from "./assets/images/image-plane.jpg";
import restaurantImage from "./assets/images/image-restaurant.jpg";
import iconApi from "./assets/images/icon-api.svg";
import onboardingApi from "./assets/images/icon-onboarding.svg";
import onlineApi from "./assets/images/icon-online.svg";
import budgetingApi from "./assets/images/icon-budgeting.svg";
import FooterComponent from "./components/footer/FooterComponent";
function App() {
  const whyChooseUsObject = [
    {
      img: onlineApi,
      header: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      img: budgetingApi,
      header: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      img: onboardingApi,
      header: "Fast Onboarding",
      text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      img: iconApi,
      header: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  const articleObjects = [
    {
      img: currencyImage,
      header: "Receive money in any currency with no fees",
      text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      author: "Claire Robinson",
    },
    {
      img: restaurantImage,
      header: "Treat yourself without worrying about money",
      text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      author: "Wilson Hutton",
    },
    {
      img: planeImage,
      header: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      author: "Wilson Hutton",
    },
    {
      img: confettiImage,
      header: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta It’s easy to request an invite through the site ...",
      author: "Claire Robinson",
    },
  ];
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
