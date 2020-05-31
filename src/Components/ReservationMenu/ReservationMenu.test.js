import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReservationMenu from './ReservationMenu'
import '@testing-library/jest-dom/extend-expect';

describe(ReservationMenu, () => {
  var mockedState = {
    date: '10June20',
    id: null,
    name: 'Justin',
    number: '10',
    time: '8pm'
}

  const mockClickHandler = jest.fn()

  it('renders without crashing', () => {
   const { getByPlaceholderText} = render(<ReservationMenu />)
   const nameInput = getByPlaceholderText('Name')
   expect(nameInput).toBeInTheDocument()
  });

  it('should keep track of the user inputs', () => {
   const { getByText, getByPlaceholderText} = render(<ReservationMenu createReservation={mockClickHandler}/>)

   const nameInput = getByPlaceholderText('Name')
   fireEvent.change(nameInput, {target: {value: 'Justin'}})

   const timeInput = getByPlaceholderText('Time')
   fireEvent.change(timeInput, {target: {value: '8pm'}})

   const guestsInput = getByPlaceholderText('Number of Guests')
   fireEvent.change(guestsInput, {target: {value: '10'}})

   const dateInput = getByPlaceholderText('Date')
   fireEvent.change(dateInput, {target: {value: '10June20'}})

   const makeReservationButton = getByText('Make Reservation')
   fireEvent.click(makeReservationButton)
   expect(mockClickHandler).toHaveBeenCalledWith(mockedState)
  });

})
