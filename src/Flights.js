import React from 'react'

const Flights = props => {

   const button = <button>Buy ticket</button>;
   const flights = props.flights.map(item => `${item[0]} to ${item[1]}`)
   const flightsA = props.flights.map(item => item[0])
   const flightsB = props.flights.map(item => item[1])
   const indexA = flightsA.indexOf(props.userDeparture)
   const indexB = flightsB.indexOf(props.userDestination)
   const index = flights.indexOf(`${props.userDeparture} to ${props.userDestination}`)
   const flightsListA = props.flights.filter(item => item[0] === props.userDeparture)
   const flightsListB = props.flights.filter(item => item[1] === props.userDestination)
   const oneTwo = flightsListA.map(item => item[1]);
   const twoOne = flightsListB.map(item => item[0])
   const filterChanges = twoOne.filter(item => oneTwo.includes(item))
   const afterChange = flightsListB.filter(item => item[0].includes(filterChanges))
   const beforeChange = flightsListA.filter(item => item[1].includes(filterChanges))

   if ( props.userDeparture === "choose departure" || props.userDestination === "choose destination" ) {
     return <div className="results-summary"><p>Choose departure and destination</p></div>
   } else if ( index !== -1 ) {
    return <div className="results-summary"><h2>{flights[index]}</h2>{button}</div>
   } else if ( indexA !== -1 && indexB !== -1 && filterChanges.length > 0 ){
   return <p>Fly by <span>{beforeChange}</span> and change plane in <span>{filterChanges}</span> to <span>{afterChange}</span></p>
   } else {
     return <div className="results-summary"><p>No connections</p></div>
   }

  }
    export default Flights