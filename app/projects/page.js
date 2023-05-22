import React from "react";

import "@/styles/globals.css";
import Projects from "@/components/Portfolio/Projects";

const Portfolio = () => {


  return (
    <div className="portfolio container flex mt-5 justify-evenly">
      <Projects/>
    </div>
  );
};

export default Portfolio;
