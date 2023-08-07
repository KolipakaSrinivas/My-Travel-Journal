import { Fragment } from "react"

export default function Card({data}) {
  return (
    <Fragment>
    <div className="card flex">
      <div className="card-img">
        <img src={`./cards-images/${data.image}`} alt="" />
      </div>
      <div className=" card-info flex">
        <div>
          <div className="flex card-name">
          <img src="./images/location.svg" alt="" />
          <h2>{data.country}</h2>
          <a href={data.googlemapslink}>View on Google Maps</a>
          </div>
        <h1 className="place-name">{data.visitplace}</h1>
        </div>
        <div className="card-d">
          <h3>{data.date}</h3>
          <p>
            {data.about}
          </p>
        </div>
      </div>
    </div>
      <hr id="hr"/>
    </Fragment>
  );
}
