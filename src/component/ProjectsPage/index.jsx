import React from "react";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";
import Footer from "../VerticalFooter";
import NextPage from "../NextPage";

export default function ProjectsPage() {
  const children = [
    <FeaturedProjects />,
    <Footer />,
    <NextPage pageName="Apply" url="/apply" />,
  ];

  return (
    <DesktopMobileScrollAndBackgroundHandler
      children={children}
      desktopBGColor={"white"}
      mobileBGColor={"white"}
    />
  );
}
