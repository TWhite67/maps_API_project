import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import Marker from './Marker';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Map>
          <Marker pos={{lat: 33.522359, lng: -112.064559}} />
        </Map>
      </div>
    );
  }
}

export default App;
