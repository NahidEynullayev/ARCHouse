import React from "react";
import "./Forming.scss";
import imgOne from "./FormingImage/ImageCardOne.png";
import imgTwo from "./FormingImage/ImageCardTwo (2).png";
import imgThree from "./FormingImage/ImageCardThree (2).png";
import Button from "../../../components/Button/Button";
const Forming = () => {
  return (
    <React.Fragment>
      <div className="forming">
        <div className="forming-header">
          <div className="irrational">
            <p>
              Forming an irrational love between clients and their buildings
            </p>
          </div>
          <div className="approach">
            <p>Our approach starts with...</p>
            <p>How do you want to make people feel?</p>
          </div>
        </div>
        <div className="forming-main">
          <img src={imgOne} alt="" />
          <img src={imgTwo} alt="" />
          <img src={imgThree} alt="" />
        </div>
        <div className="forming-footer">
          <p className="fft">
            In the face of changing trends and technologies, ARK House creates
            architecture that remains relevant - not based on trends, fads or
            dates - but on timeless human truths.
          </p>
          <Button text="Our History" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forming;
