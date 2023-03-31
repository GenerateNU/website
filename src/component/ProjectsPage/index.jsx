import React from "react";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";
 
export default function ProjectsPage() {
    const children = [
        <FeaturedProjects/>
    ]

    return (
      <DesktopMobileScrollAndBackgroundHandler
        children={children}
        desktopBGColor={"white"}
        mobileBGColor={"white"}
      />
    );
}
