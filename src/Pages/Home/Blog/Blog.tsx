import React from "react";
import "./Blog.scss";
import RepeatHeader from "../../../components/RepeatNavBar/RepeatHeader";
import img23 from "./BlogImg/Image (23).png";
import img24 from "./BlogImg/Image (24).png";
const Blog = () => {
  return (
    <React.Fragment>
      <div className="blogContainer">
        <RepeatHeader HeaderText={"Blog"} HeaderButton={"Show More"} />
        <div className="blogCard">
          <div className="blogCardLeft">
            <img width={"100%"} height={"74.5%"} src={img23} alt="" />
            <div className="text">
              <span>Nov 12, 2023</span>
              <h3>Design and architecture training</h3>
              <p>
                Designers and architects learn through a combination of formal
                education, practical experience, and continuing professional
                development.
              </p>
            </div>
          </div>
          <div className="blogCardRight">
            <img width={"100%"} height={"74.5%"} src={img24} alt="" />
            <div className="text">
              <span>Nov 01, 2023</span>
              <h3>Design of public spaces</h3>
              <p>
                Public space design focuses on creating functional, safe, and
                visually appealing areas that foster social connections,
                community involvement, and a strong sense of place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
