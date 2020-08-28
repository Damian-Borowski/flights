import React, {Component} from 'react';
import './App.css';
import Flights from './Flights'

const departures = [
  'ATH', 'BSL', 'BFS', 'BLQ', 'BTS', 'BRS', 'CRL', 'BUD', 'DUB', 'EDI', 'EIN', 'GLA', 'HAM', 'CTA', 'KEF', 'CGN', 'SUF', 'LCA', 'LPL', 'LIS', 'LTN', 'STN', 'MAD'
];

const destinations = [
  'ATH', 'BSL', 'BFS', 'BLQ', 'BTS', 'BRS', 'CRL', 'BUD', 'DUB', 'EDI', 'EIN', 'GLA', 'HAM', 'CTA', 'KEF', 'CGN', 'SUF', 'LCA', 'LPL', 'LIS', 'LTN', 'STN', 'MAD'
];

const flights = [
['ATH','EDI'],
['ATH','GLA'],
['ATH','CTA'],
['BFS','CGN'],
['BFS','LTN'],
['BFS','CTA'],
['BTS','STN'],
['BTS','BLQ'],
['CRL','BLQ'],
['CRL','BSL'],
['CRL','LTN'],
['DUB','LCA'],
['LTN','DUB'],
['LTN','MAD'],
['LCA','HAM'],
['EIN','BUD'],
['EIN','MAD'],
['HAM','BRS'],
['KEF','LPL'],
['KEF','CGN'],
['SUF','LIS'],
['SUF','BUD'],
['SUF','STN'],
['STN','EIN'],
['STN','HAM'],
['STN','DUB'],
['STN','KEF']
]; 

const Title = () => {
  return(
    <div className="title-box">
    <h1 className="title">Flights App</h1>
    </div>
  )
  }

const Departure = (props) => {
  const departure = props.departure
  return(
  departure.map((departure, index) => 
  <option key={index} value={departure}>{departure}</option>)
  )
}

const Destination = (props) => {
  const destination = props.destination

  return(
  destination.map((destination, index) => 
  <option key={index} value={destination}>{destination}</option>)
  )
} 

class App extends Component {
  state = {
    userDeparture : "choose departure",
    userDestination : "choose destination",
  }

  handleChooseDeparture = (e) => {
    const event = e.target.value;
    this.setState(() => {
      return {
        userDeparture : event
      }
    })
  }

  handleChooseDestination = (e) => {
    const event = e.target.value;
    console.log(event)
    this.setState(() => {
      return {
        userDestination : event
      }
    })
  }
  
  render() {
  return (
    <div className="app">
      <Title/>
      <label htmlFor="departure" className="text">Choose Departure:</label>
      <select required onChange={this.handleChooseDeparture} id="departure">
      <option>Choose departure</option>
     <Departure departure={departures}/>
     </select>
     <label htmlFor="destination" className="text">Choose Destination:</label>
      <select required onChange={this.handleChooseDestination} id="destination">
      <option>Choose destination</option>
     <Destination destination={destinations}/>
     </select>
     <div className="results"><hr/>
     <h1 className="results-title">Results:</h1>
     <Flights userDeparture={this.state.userDeparture} userDestination={this.state.userDestination} flights={flights}/>
     </div>
    </div>
  );
}
}

export default App;
