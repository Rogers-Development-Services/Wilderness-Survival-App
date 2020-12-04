import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
         lat: 6.2518401,
         lng: -75.563591
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDC-tiYyxZ4fmrlc2QD_BnqlbyhQkuEgco'
})(MapContainer);
