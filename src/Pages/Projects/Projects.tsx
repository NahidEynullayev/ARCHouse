import React, { FC } from "react";
import "./Projects.scss";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Projects: FC = () => {
  return (
    <React.Fragment>
      <Link to="/projects/:id"> Projects</Link>
      <Outlet />
    </React.Fragment>
  );
};

export default Projects;
