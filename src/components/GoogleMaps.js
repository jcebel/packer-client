/*global google*/
import React from 'react';

const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAf7aIGVns1ktVf5sw__NGaygucuRsqCiw&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `350px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: 'Regensburg HBF',
                destination: 'Leiherkasten',
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
                waypoints: [
                    {location: 'Elsendorf', stopover: true},
                    {location: 'Pfaffenhofen', stopover: true}
                ],
                optimizeWaypoints: false,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(48.1548256,11.4017508,)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
);

export default MapWithADirectionsRenderer;