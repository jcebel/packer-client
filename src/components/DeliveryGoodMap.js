//  Insert the following line in your code and adapt long lat information
//  <DeliveryGoodMap markerLocation={{lat: 48.262235, lng: 11.670273}}/>


import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


const mapStyle = {
    height: '350px',
};
class DeliveryGoodMap extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyle}
                initialCenter={this.props.markerLocation}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Delivery Good information...'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAf7aIGVns1ktVf5sw__NGaygucuRsqCiw'
})(DeliveryGoodMap);