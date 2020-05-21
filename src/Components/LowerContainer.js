import React from 'react';
import Card from './Card'
import ReservationMenu from './ReservationMenu'

const LowerContainer = ({upcomingReservations}) => {
 let reservations = upcomingReservations.map(reservation => {
   return <Card key={reservation.id} reservationDetails={reservation} />
 })

return (
  <div className='reservationContainer'>
    <ReservationMenu />
    {reservations}
  </div>
)

}

export default LowerContainer
