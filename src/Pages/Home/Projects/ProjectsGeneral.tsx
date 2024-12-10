import React from "react";
import "./ProjectsGeneral.scss";
import RepeatHeader from "../../../components/RepeatNavBar/RepeatHeader";
import imgOne from "./pgiMG/ImageCardLogo.png";
import imgTwo from "./pgiMG/Image Card & Logo (1).png";
import imgThree from "./pgiMG/Image Card & Logo (2).png";
import imgFour from "./pgiMG/Numbers (2).png";
import Img9 from "./pgiMG/Image Card & Logo (9).png";
import img15 from "./pgiMG/Image (15).png";
import img16 from "./pgiMG/Image (16).png";
import img17 from "./pgiMG/Image (17).png";
import img18 from "./pgiMG/Image (18).png";
import img33 from "./pgiMG/Numbers (3).png";
import img11 from "./pgiMG/Image Card & Logo (11).png";
import imglast from "./pgiMG/Image Card & Logo (12).png";
import Button from "../../../components/Button/Button";
const ProjectsGeneral = () => {
  return (
    <React.Fragment>
      <div className="projectsContainer">
        <RepeatHeader
          HeaderText="Recent Projects"
          HeaderButton="Discover All"
        />
        <main>
          <div className="projOne">
            <div className="projOneOne">
              <img className="projOneOneImg" src={imgOne} />
              <div className="projOneText">
                <p>UVU Classroom Building</p>
                <p>Omer, UT</p>
              </div>
            </div>
            <div className="projOneTwo">
              <img className="projOneTwoImg" src={imgTwo} alt="" />
              <div className="projTwoText">
                <p>Thomas S. Monson Center</p>
                <span>Salt Lake City, UT</span>
              </div>
            </div>
          </div>
          <div className="projTwo">
            <div className="projTwoOne">
              <img className="projTwoOneImg" src={imgThree} alt="" />
              <div className="projTwoOneText">
                <p>USU Swaner Preserve and Ecocenter</p>
                <span>Logan, UT</span>
              </div>
            </div>
            <div className="projTwoTwo">
              <img className="projTwoTwoImg" src={imgFour} alt="" />
              <p>UTA TRAX: Mid-Jordan Line</p>
            </div>
          </div>
          <div className="projThree">
            <div className="projThreeOne">
              <img className="projThreeOneImg" src={Img9} alt="" />

              <p>UVU Fulton Library</p>
              <span>Orem, UT</span>
            </div>
            <div className="projThreeTwo">
              <img className="projThreeTwoImg" src={img15} alt="" />

              <p>USU College of Agriculture</p>
              <span>Logan, UT</span>
            </div>
          </div>
          <div className="projFour">
            <div className="projFourOne">
              <img src={img16} alt="" className="projFourOneImg" />
              <p>Sugar House Monument Plaza</p>
              <span>Salt Lake City, UT</span>
            </div>
            <div className="projFourTwo">
              <img src={img17} alt="" className="projFourTwoImg" />
              <p>UTA TRAX: Mid-Jordan Line</p>
              <span>Salt Lake County, UT</span>
            </div>
          </div>
          <div className="projFive">
            <div className="projFiveOne">
              <img src={img18} alt="" className="projFiveOneImg" />
              <p>Unified State Laboratory - Module 2</p>
              <span>Salt Lake City, UT</span>
            </div>
            <div className="projFiveTwo">
              <img src={img11} alt="" className="projFiveTwoImg" />
              <p>U of U Sutton Geology and Geophysics</p>
              <span>Salt Lake City, UT</span>
            </div>
          </div>
          <div className="projSix">
            <div className="projSixOne">
              <img src={img33} alt="" className="projSixOneImg" />
              <p>With over 2.600 projects completed</p>
            </div>
            <div className="projSixTwo">
              <img src={imglast} alt="" className="projSixTwoImg" />
              <p>S - Line</p>
              <span>Salt Lake City, UT</span>
            </div>
          </div>
        </main>
        <footer>
          <p>Start a Project?</p>
          <Button text={"Contact Us"} />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ProjectsGeneral;
