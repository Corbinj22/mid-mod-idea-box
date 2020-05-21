export { getReservations };

const getReservations = async () => {
  let reservations;
  let getReservationsResponse = await fetch('http://localhost:3001/api/v1/reservations')
  let getReservationsData = await getReservationsResponse.json()
  return getReservationsData
}
