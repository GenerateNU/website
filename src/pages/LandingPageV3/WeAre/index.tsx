import weare from '@/assets/images/landingpage/weare/weare.jpg';
import type { Value } from '@/pages/LandingPageV3/types';
import { useSanity } from '@/services/useSanity';

export default function WeAre() {
  const query = `*[_type == "value"] {value, index} | order(index asc)`;
  const values = useSanity<Value>(query);

  return (
    <div id="ll3-row" className="bg-row">
      <div id="we-are-img-div">
        <div className="white-header-text padded" id="we-are-text">
          We Are...
        </div>
        <img className="we-are-img image-shadow" src={weare} alt="Three Generate members working together." />
      </div>
      <div className="ll-container">
        <div id="values-container">
          <div id="value-0" className="value">
            {values[0]?.value}
          </div>
          <div id="value-1" className="value">
            {values[1]?.value}
          </div>
          <div id="value-2" className="value">
            {values[2]?.value}
          </div>
          <div id="value-3" className="value">
            {values[3]?.value}
          </div>
          <div id="value-4" className="value">
            {values[4]?.value}
          </div>
        </div>
        <div id="landing-lines-3" className="landing-lines" />
      </div>
    </div>
  );
}
