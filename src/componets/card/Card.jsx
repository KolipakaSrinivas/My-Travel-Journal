import { Fragment } from "react"

export default function Card() {
  return (
    <Fragment>
    <div className="card flex">
      <div className="card-img">
        <img src="./cards-images/Mount-Fuji.jpg" alt="" />
      </div>
      <div className=" card-info flex">
        <div>
          <div className="flex card-name">
          <img src="./images/location.svg" alt="" />
          <h2>JAPAN</h2>
          <a href="#">View on Google Maps</a>
          </div>
        <h1 className="place-name">Mount Fuji</h1>
        </div>
        <div className="card-d">
          <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
      <hr id="hr"/>
    </Fragment>
  );
}
