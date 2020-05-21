import React from 'react';
import './Card.css'

const Card = ({reservationDetails}) => {

  return (
    <div className='resCard'>
      <p className="resDate">Date {reservationDetails.date}</p>
      <p className="resName">Name: {reservationDetails.name}</p>
      <p className="resNumber">Number of Guests: {reservationDetails.number}</p>
      <p className='resTimeStatic'>Resevation Time</p>
      <p className="resTime">{reservationDetails.time}</p>
    </div>
  )
}

export default Card;
