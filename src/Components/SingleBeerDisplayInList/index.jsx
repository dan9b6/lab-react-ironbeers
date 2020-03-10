import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default function SingleBeerDisplayInList(props) {
  return (
    <Link to="/beers/:beerId">
      <div className="beer__display">
        <img src={props.image_url} alt="" />
        <div className="beer__description">
          <h4>{props.name}</h4>
          <p>{props.tagline}</p>
          <i>
            <small>{props.contributed_by}</small>
          </i>
        </div>
      </div>
    </Link>
  );
}
