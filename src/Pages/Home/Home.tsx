import React, { FC } from "react";
import "./Home.scss";
import Architecture from "./Architecture/Architecture";
import Forming from "./Forming/Forming";
import Services from "./Services/Services";

import ProjectsGeneral from "./Projects/ProjectsGeneral";
import Team from "./Team/Team";
import Blog from "./Blog/Blog";
const Home: FC = () => {
  return (
    <React.Fragment>
      <Architecture />
      <Forming />
      <Services />
      <ProjectsGeneral />
      <Team />
      <Blog />
    </React.Fragment>
  );
};

export default Home;
