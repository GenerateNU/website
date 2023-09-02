import React from "react";
import "./style.css";
import useWebsite from "../../../../shared/useMobile";

export default function TextRow({title, description, picture, reverse}) {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;
  const mobile = !isBigScreen || !isWebsite;
    return (
        <div className={`${mobile ? 'text-row-mobile' : 'text-row'} ${!mobile && reverse ? 'reverse' : ''} `}>
            <div className={`${mobile ? "info-section-mobile" : "info-section"}`}>
            <div className={`${mobile ? 'paragraph-title-mobile' : 'paragraph-title'}`}>{title}</div>
            <div className={`${mobile ? 'paragraph-text-mobile' : "paragraph-text"}`}>
                {description}
            </div>
            </div>
            <img src={picture} className="info-pic" alt=""></img>
        </div>
    )
}