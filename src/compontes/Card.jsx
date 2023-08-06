import { Fragment } from "react";

function Card() {
  return (
    <Fragment>
      <div>
        <div>
          <img src="./" alt="" />
        </div>
        <div>
          <div>
            <img src="./images/location-logo.svg" alt="" />
            <a href="#">View on Google Maps</a>
          </div>
          <h1>Mount Fuji</h1>
          <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
