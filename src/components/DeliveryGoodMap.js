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
        if (this.state.loading || this.props.google === undefined) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Map
                google={this.props.google}
                zoom={13}
                initialCenter={this.props.currentLoc  || {lat: 48.162955, lng: 11.570895}}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Current Delivery Good Location'}
                    name={'Current Delivery Good Location'}
                    position={this.props.currentLoc}
                    icon={{
                        url: "/Images/box.png"
                    }}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Sender Address'}
                    name={'Sender Address'}
                    position={this.props.sender}
                    icon={{
                        url: "/Images/start.png"
                    }}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Recipient Address'}
                    name={'Recipient Address'}
                    position={this.props.recipient}
                    icon={{
                        url: "/Images/finish.png"
                    }}
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