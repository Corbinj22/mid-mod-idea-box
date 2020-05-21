import React, { Component } from 'react';
import LowerContainer from '../Components/LowerContainer'
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <LowerContainer upcomingReservations={this.state.upcomingReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
