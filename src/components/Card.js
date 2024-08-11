import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto hover">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <NavLink to={props.visit} className="btn btn-outline-primary">
              {props.btnname}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
