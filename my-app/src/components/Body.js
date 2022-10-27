import React from 'react';

import Icon1 from '../images/icon1.png';
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";

function Body() {
  return (
    <div>
      <div class="container">
        <div>
          <div class="picture">
            <img src={Icon1} alt="Icon1" />
          </div>
          <div class="text">
            <p>Some text</p>
          </div>
        </div>
        <div>
          <div class="picture">
            <img src={Icon2} alt="Icon2" />
          </div>
          <div class="text">
            <p>Some text</p>
          </div>
        </div>
        <div>
          <div class="picture">
            <img src={Icon3} alt="Icon3" />
          </div>
          <div class="text">
            <p>Some text</p>
          </div>
        </div>
        <div>
          <div class="picture">
            <img src={Icon4} alt="Icon4" />
          </div>
          <div class="text">
            <p>Some text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body