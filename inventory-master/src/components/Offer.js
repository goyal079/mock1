import React from "react";

function Offer() {
  return (
    <div>
      <div class="offer">
        <div class="small-container">
          <div class="row">
            <div class="col-2">
              <img src="images/exclusive.png" class="offer-img" alt="" />
            </div>
            <div class="col-2">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 fearures a 39.9%larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is clear as can be.
                <br />
              </small>
              <a href="products.html" class="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
