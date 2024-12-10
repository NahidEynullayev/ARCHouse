import React from "react";
import mountain from "./ArcImg/moun.png";
import "./Architecture.scss";
import Button from "../../../components/Button/Button";
const Architecture = () => {
  return (
    <React.Fragment>
      <div className="arc">
        <img className="mounImage" src={mountain} alt="" />
        <div className="text-social">
          <div className="text">
            <p className="textP">Architecture. Planning. Design.</p>
          </div>
          <div className="social-button">
            <Button text="Contact Us" />
            <div className="social"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Architecture;
