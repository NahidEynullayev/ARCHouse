import React from "react";
import "./Team.scss";
import RepeatHeader from "../../../components/RepeatNavBar/RepeatHeader";
import img19 from "./TeamImg/Image (19).png";
import img20 from "./TeamImg/Image (20).png";
import img21 from "./TeamImg/Image (21).png";
import img22 from "./TeamImg/Employee Image (4).png";
import img23 from "./TeamImg/Image (22).png";
import img24 from "./TeamImg/Employee Image (5).png";
const Team = () => {
  return (
    <React.Fragment>
      <div className="teamContainer">
        <RepeatHeader HeaderText={"Our Team"} HeaderButton={"Show All"} />
        <main>
          <div className="heroHeader">
            <p>
              Our team of expert architects and builders, with over 45 years of
              combined experience, will bring your vision to life. Trust us to
              deliver functional and beautiful structures that exceed
              expectations.
            </p>
          </div>
          <div className="heroMain">
            <div className="heroMainSide">
              <ul>
                <li>Management</li>
                <li>Architects</li>
                <li>Engineers</li>
                <li>Builders</li>
              </ul>
            </div>
            <div className="heroImgs">
              <div className="heroImgsHead">
                <div className="card">
                  <img height={"80%"} width={"100%"} src={img19} alt="" />
                  <div className="cardText">
                    <p>Jane Cooper</p>
                    <span>Art Director</span>
                  </div>
                </div>
                <div className="card">
                  <img height={"80%"} width={"100%"} src={img20} alt="" />
                  <div className="cardText">
                    <p>Cameron Williamson</p>
                    <span>Senior Manager</span>
                  </div>
                </div>
                <div className="card">
                  <img height={"80%"} width={"100%"} src={img21} alt="" />
                  <div className="cardText">
                    <p>Brooklyn Simmons</p>
                    <span>PR Manager</span>
                  </div>
                </div>
              </div>
              <div className="heroImgsFoot">
                <div className="card">
                  <img height={"80%"} width={"100%"} src={img22} alt="" />
                  <div className="cardText">
                    <p>Jacob Jones</p>
                    <span>Financial Director</span>
                  </div>
                </div>
                <div className="card">
                  <img height={"80%"} width={"100%"} src={img23} alt="" />
                  <div className="cardText">
                    <p>Jerome Bell</p>
                    <span>Lead Designer</span>
                  </div>
                </div>
                <div className="card">
                  <img height={"80%"} width={"100%"} src={img24} alt="" />
                  <div className="cardText">
                    <p>Kristin Watson</p>
                    <span>HR Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Team;
