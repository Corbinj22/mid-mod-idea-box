import React, { Component } from 'react';
import LowerContainer from '../Components/LowerContainer/LowerContainer'
import './App.css';

import { getReservations } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      upcomingReservations: []
    }
  }

    componentDidMount = async () => {
    await this.setState({
     upcomingReservations: await getReservations()
    })
  }

  createReservation = (newResevation) => {
    newResevation.id = this.state.upcomingReservations.length + 1
    this.setState({
      upcomingReservations: [...this.state.upcomingReservations, newResevation]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <LowerContainer
          upcomingReservations={this.state.upcomingReservations}
          createReservation={this.createReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
