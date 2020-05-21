import React from 'react';
import Card from '../Card/Card'
import ReservationMenu from '../ReservationMenu/ReservationMenu'

const LowerContainer = ({upcomingReservations, createReservation}) => {
 let reservations = upcomingReservations.map(reservation => {
   return <Card key={reservation.id} reservationDetails={reservation} />
 })

return (
  <div className='reservationContainer'>
    <ReservationMenu createReservation={createReservation}/>
    {reservations}
  </div>
)

}

export default LowerContainer
