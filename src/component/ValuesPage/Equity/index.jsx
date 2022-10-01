import React from "react";
import "./style.css";

export default class Diversity extends React.Component {
    render() {
    return (
          <div className="diversity">
            <div className="sideways">
            <h1>
                <span class="white-text">DIVERSITY</span>
                <span class="green-text">DIVERSITY</span>
                <span class="white-text">DIVERSITY</span>
            </h1>
            </div>
            <div className="number">
                <h2>1.0</h2>
            </div>
            <div className="descriptions">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed
                nunc porttitor arcu etiam. Eget duis sapien, faucibus nunc nec elit
                tempus risus. Tincidunt sagittis nulla orci id. Augue risus
                adipiscing mi eleifend proin nisl ac gravida. Viverra cursus.
            </p>
            </div>
          </div>
    );
  }
}