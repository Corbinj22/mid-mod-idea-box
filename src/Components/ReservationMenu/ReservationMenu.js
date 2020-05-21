import React, { Component } from 'react';

class ReservationMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      id: null,
      name: '',
      number: 0,
      time: ''
    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  updateTime = (event) => {
    this.setState({
      time: event.target.value
    })
  }

  updateGuests = (event) => {
    this.setState({
      number: event.target.value
    })
  }

  updateDate = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  clickHandler = (event) => {
    event.preventDefault()
    this.props.createReservation(this.state)
  }

  render() {
    return (
      <form className='reservationForm'>
        <input className='userDate' type='text' placeholder='Date' onChange={this.updateDate}></input>
        <input className='userName' type='text' placeholder='Name' onChange={this.updateName}></input>
        <input className='userNumber' type='text' placeholder='Number of Guests' onChange={this.updateGuests}></input>
        <input className='userTime' type='text' placeholder='Time' onChange={this.updateTime}></input>
        <button className="submitReservation" type='click' onClick={this.clickHandler}>Make Reservation</button>
      </form>
    );
  }
}


export default ReservationMenu;
