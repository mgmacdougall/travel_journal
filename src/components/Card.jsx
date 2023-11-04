import React from 'react';
import './Card.css';
import {CiLocationOn} from 'react-icons/ci';
import {IconContext} from 'react-icons';
function Card(props) {
  console.log(props.description.split(' '));
  console.log(props.description);
  console.log(props.description.length);
  let truncated =
    props.description.length > 100
      ? props.description.split(' ').splice(0, 80).join(' ')
      : props.description;
  return (
    <div className="card">
      <div className="card--location">
        <img className="card--image" src={props.imageUrl} />
        <div className="card-inner-container">
          <div className="card--header">
            <div>
              <IconContext.Provider value={{color: 'red'}}>
                <CiLocationOn />
              </IconContext.Provider>
              <p>
                {props.location}
              </p>
            </div>
            <a
              className="card-location"
              href={props.googleMapsUrl}
              target="_blank">
              View on Google Maps
            </a>
          </div>
          <h3>
            {props.title}
          </h3>
          <span>
            {props.startDate} - {props.endDate}
          </span>
          <p>
            {truncated + '...'}
          </p>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Card;
