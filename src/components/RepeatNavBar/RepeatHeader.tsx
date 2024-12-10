import React from "react";
import "./RepeatHeader.scss";
import Button from "../Button/Button";
const RepeatHeader = ({ HeaderText, HeaderButton }) => {
  return (
    <React.Fragment>
      <header>
        <p className="services">{HeaderText}</p>

        <Button text={HeaderButton} />
      </header>
    </React.Fragment>
  );
};

export default RepeatHeader;
