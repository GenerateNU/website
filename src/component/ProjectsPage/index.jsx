import React from "react";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import AllProjects from "./AllProjects/AllProjects";
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";
import Footer from "../VerticalFooter";
import NextPage from "../NextPage";
import "./style.css";

export default function ProjectsPage() {
  const children = [
    <FeaturedProjects />,
    <AllProjects />,
    <Footer />,
    <NextPage pageName="Apply" url="/apply" />,
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
