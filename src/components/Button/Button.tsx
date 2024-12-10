import React, { FC } from "react";
import "./Button.scss";
import arrow from "./ButtonIMG/arrow.png";
interface ButtonProps {
  text: string;
}
const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <React.Fragment>
      <div className="button">
        <div className="textButton">
          <p> {text}</p>
        </div>
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Button;
