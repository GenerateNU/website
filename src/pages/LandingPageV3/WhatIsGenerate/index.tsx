import React from 'react';
import type { Ref } from 'react';

import showcase from '@/assets/images/landingpage/weare/showcase.jpg';
import workshop from '@/assets/images/landingpage/weare/workshop.jpg';
import type { Copy } from '@/pages/LandingPageV3/types';
import { useSanity } from '@/services/useSanity';

type WhatIsGenerateProps = {
  ref?: Ref<HTMLDivElement>;
};

export default function WhatIsGenerate({ ref }: WhatIsGenerateProps) {
  const query = `*[_type == "copy" && key == "what-is-generate-landing"]{header, content}`;
  const headerCopy = useSanity<Copy>(query);

  return (
    <div ref={ref} className="grid-bg bg-row" id="ll2-row">
      <div className="half-container blue-bg" id="what-is-generate">
        <div className="white-header-text">{headerCopy[0]?.header}</div>
        {headerCopy[0]?.content.map((item, index) => (
          <p key={index} className="white-p-text">
            {item}
            <br />
            <br />
          </p>
        ))}
      </div>
      <div id="what-is-img-container" className=" ">
        <div className="what-is-img-div" id="what-is-img-1">
          <img src={showcase} alt="generate studnets having fun" className="what-is-img image-shadow" />
        </div>
        <div className="what-is-img-div" id="what-is-img-2">
          <img src={workshop} alt="generate studnets having fun" className="what-is-img image-shadow" />
        </div>
      </div>
      <div className="ll-container">
        <div id="landing-lines-2" className="landing-lines" />
      </div>
    </div>
  );
}
