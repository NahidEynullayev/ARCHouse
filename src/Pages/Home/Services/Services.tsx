import React from "react";
import "./Services.scss";
import RepeatHeader from "../../../components/RepeatNavBar/RepeatHeader";
import three from "./ServicesImg/3 (1).png";
import image from "./ServicesImg/Image (7).png";
import Button from "../../../components/Button/Button";
const Services = () => {
  return (
    <React.Fragment>
      <div className="containerServices">
        <RepeatHeader HeaderButton="Discover All" HeaderText="Services" />
        <main>
          <div className="offices">
            <img src={three} alt="" />
            <p>Offices around the world</p>
          </div>
          <div className="landscape">
            <ul>
              <li>Architecture</li>
              <li>Landscape</li>
              <li>Interior</li>
              <li>Design</li>
            </ul>
          </div>
          <div className="heart">
            <img src={image} alt="" />
            <div className="guide">
              <p className="heartText">
                At the heart of everything we do is the human experience to
                feel. To love. To image. To wonder. To guide. To jest. To rule.
                To serve. To belong.
              </p>
              <Button text="Contact Us" />
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Services;
