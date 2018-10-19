import React, { Component } from 'react';
import Marker from './Marker' 


class Map extends Component {
  constructor(props) {
    super(props)
    this.mapDiv = React.createRef()

    this.state = {
      currentLocation: {lat: 33.522359, lng: -112.064559}
    }
  }

  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    })
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
        Loading Map
        {this.renderChildren()}
      </div>
    );
  }
}

export default Map;
