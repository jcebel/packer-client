import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class DeliveryGoodMap extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
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
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Map
                google={this.props.google}
                zoom={15}
                initialCenter={this.props.currentLoc}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Current Delivery Location'}
                    name={'Current Delivery Location'}
                    position={this.props.currentLoc}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Sender Address'}
                    name={'Sender Address'}
                    position={this.props.sender}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Recipient Address'}
                    name={'Recipient Address'}
                    position={this.props.recipient}
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