import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props)
    this.mapDiv = React.createRef()
  }
  componentDidMount() {
    window.initMap = () => {
      console.log("made it here")
      let map = new window.google.maps.Map(this.mapDiv.current, {
        center: {lat: 33.522359, lng: -112.064559},
        zoom: 13
      });
    }
  }
  render() {
    return (
      <div className="Map" ref={this.mapDiv}>
        I am Map
      </div>
    );
  }
}

export default Map;
