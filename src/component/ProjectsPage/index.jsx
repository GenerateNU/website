import React from "react";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";
import Footer from "../VerticalFooter";

export default function ProjectsPage() {
  const children = [<FeaturedProjects />, <Footer />];

  return (
    <DesktopMobileScrollAndBackgroundHandler
      children={children}
      desktopBGColor={"white"}
      mobileBGColor={"white"}
    />
  );
}
