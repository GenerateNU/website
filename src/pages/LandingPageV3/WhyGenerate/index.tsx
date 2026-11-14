import clients from '@/assets/images/landingpage/weare/cstar.jpg';
import members from '@/assets/images/landingpage/weare/members.JPG';
import partners from '@/assets/images/landingpage/weare/overhead.jpg';
import { useCopy } from '@/sanity/queries/copyQuery';

export default function WhyGenerate() {
  const whyGenerate1 = useCopy('why-generate-1');
  const whyGenerate2 = useCopy('why-generate-2');
  const whyGenerate3 = useCopy('why-generate-3');

  return (
    <div className="bg-row" id="ll4-row">
      <div id="why-generate">
        <div className="white-header-text">Why Generate?</div>
        <div className="why-gen-container">
          <div className="why-gen-col">
            <div className="white-h2-text">{whyGenerate1.header}</div>
            <div className="why-gen-col-content">
              <p className="white-p-text">{whyGenerate1.content[0]}</p>
              <img src={members} className="why-gen-img image-shadow" alt="Placeholder" />
            </div>
          </div>
          <div className="why-gen-col">
            <div className="white-h2-text">{whyGenerate2.header}</div>
            <div className="why-gen-col-content" id="wgcc-rev">
              <img src={clients} className="why-gen-img  image-shadow" alt="Placeholder" />
              <p className="white-p-text">{whyGenerate2.content[0]}</p>
            </div>
          </div>
          <div className="why-gen-col">
            <div className="white-h2-text">{whyGenerate3.header}</div>
            <div className="why-gen-col-content">
              <p className="white-p-text">{whyGenerate3.content[0]}</p>
              <img src={partners} className="why-gen-img image-shadow" alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
      <div className="ll-container">
        <div id="landing-lines-4" className="landing-lines" />
      </div>
    </div>
  );
}
