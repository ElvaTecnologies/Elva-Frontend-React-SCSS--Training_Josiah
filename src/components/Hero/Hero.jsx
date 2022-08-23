import React from "react";
import heroImage from "../../assets/images/image-mockups.png";
import "./HeroComponent.scss";

function HeroComponent() {
  return (
    <div className="HeroComponent">
      <div className="flex-box">
        <div className="text-div">
          <h1> Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <div className="button-div">
            <button className="fancy"> Request Invite</button>
          </div>
        </div>
        <div className="image-div">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
