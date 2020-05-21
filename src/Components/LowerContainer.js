import React from 'react';
import Card from './Card'
import IdeaMenu from './IdeaBox'

const LowerContainer = ({upcomingReservations}) => {
 let reservations = upcomingReservations.map(reservation => {
   return <Card key={reservation.id} reservationDetails={reservation} />
 })

return (
  <div className='reservationContainer'>
    {reservations}
  </div>
)

}

export default LowerContainer
