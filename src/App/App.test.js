import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { getReservations } from '../apiCalls';
jest.mock('../apiCalls');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<App />', () => {
  const mockedData = [{
    date: '5/20',
    id: 2,
    name: 'Megan',
    number: 26,
    time: '8:00'
  }];

  it('be able to make a reservation', async() => {
    getReservations.mockResolvedValueOnce(mockedData);
    const { getByPlaceholderText, getByText } = render(<App />);

    const nameInput = getByPlaceholderText('Name')
    const timeInput = getByPlaceholderText('Time')
    const guestsInput = getByPlaceholderText('Number of Guests')
    const dateInput = getByPlaceholderText('Date')
    const submitReservationBtn = getByText('Make Reservation')

  await waitFor(() => {
    fireEvent.change(nameInput, {target: {value: 'Justin'}})
    fireEvent.change(timeInput, {target: {value: '8:00'}})
    fireEvent.change(guestsInput, {target: {value: '10'}})
    fireEvent.change(dateInput, {target: {value: '6/22'}})
  })
    fireEvent.click(submitReservationBtn)

    // const name = getByText('Name: Justin')
    // const time = getByText('8:00')
    // const date = getByText('Date 6/22')
    //
    // expect(name).toBeInTheDocument()
    // expect(time).toBeInTheDocument()
    // expect(date).toBeInTheDocument()

    expect(getByText('Number of Guests: 10')).toBeInTheDocument()
    expect(getByText('Name: Justin')).toBeInTheDocument()
    expect(getByText('Date 6/22')).toBeInTheDocument()
    expect(getByText('8:00')).toBeInTheDocument()
  })



})
