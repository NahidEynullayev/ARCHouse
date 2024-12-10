import React, { FC } from "react";

import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Detail from "./Pages/ProjectsDetail/Detail";
import NotFound from "./Pages/NotFound/NotFound";

const App: FC = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />

            <Route path="/projects" element={<Projects />}>
              <Route path="/projects/:id" element={<Detail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
