import React from "react";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import AllProjects from "./AllProjects/AllProjects";
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";
import Footer from "../VerticalFooter";
import "./style.css"

export default function ProjectsPage() {
  const children = [
    <FeaturedProjects />,
    <AllProjects />,
    <Footer />
  ];

  return (
    <DesktopMobileScrollAndBackgroundHandler
      children={children}
      desktopBGColor={"white"}
      mobileBGColor={"white"}
      rowClassName="projects-page"
    />
  );
}
