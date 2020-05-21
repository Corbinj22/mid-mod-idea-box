import React, { Component } from 'react';
import './ReservationMenu.css'

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
    this.setState({
        date: '',
        id: null,
        name: '',
        number: 0,
        time: ''
    })
  }

  render() {
    return (
      <form className='reservationForm'>
        <input className='userDate catchAll' type='text' placeholder='Date' onChange={this.updateDate}></input>
        <input className='userName catchAll' type='text' placeholder='Name' onChange={this.updateName}></input>
        <input className='userNumber catchAll' type='text' placeholder='Number of Guests' onChange={this.updateGuests}></input>
        <input className='userTime catchAll' type='text' placeholder='Time' onChange={this.updateTime}></input>
        <button className="submitReservation catchAll" type='click' onClick={this.clickHandler}>Make Reservation</button>
      </form>
    );
  }
}


export default ReservationMenu;
