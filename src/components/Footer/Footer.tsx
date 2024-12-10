import React, { FC } from "react";
import "./Footer.scss";
import RepeatHeader from "../RepeatNavBar/RepeatHeader";
import Button from "../Button/Button";
const Footer: FC = () => {
  return (
    <React.Fragment>
      <footer>
        <RepeatHeader
          HeaderText={"Start a Project?"}
          HeaderButton={"Contact Us"}
        />
        <div className="supportContainer">
          <div className="support">
            <p className="sup">Support is available 24 hours</p>
            <Button text={"Contact Us"} />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
