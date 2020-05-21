import React from 'react';

const Card = ({reservationDetails}) => {

  return (
    <div className='resCard'>
      <p className="resDate">{reservationDetails.date}</p>
      <p className="resName">{reservationDetails.name}</p>
      <p className="resNumber">{reservationDetails.number}</p>
      <p className="resTime">{reservationDetails.time}</p>
    </div>
  )

}

export default Card;
