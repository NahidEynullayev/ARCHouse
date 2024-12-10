import React, { FC } from "react";
import "./Header.scss";
import logo from "./HeaderImage/LogoArc.png";
import { Link } from "react-router-dom";
const Header: FC = () => {
  return (
    <React.Fragment>
      <header>
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>Team</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
