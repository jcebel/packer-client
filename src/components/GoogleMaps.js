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
            var receivedWaypoints = this.props.route.waypoints;
            var waypointArray = [];
            receivedWaypoints.forEach(function(element) {
                waypointArray.push({location: element,  stopover: true});
            });
            const DirectionsService = new google.maps.DirectionsService();

            var travelMode = '';
            if(this.props.route.travelMode === 'Driving'){
                travelMode = google.maps.TravelMode.DRIVING;
            } else if(this.props.route.travelMode === 'Biking'){
                travelMode = google.maps.TravelMode.BICYCLING;
            } else{
                travelMode = google.maps.TravelMode.DRIVING;
            }
            DirectionsService.route({
                origin: this.props.route.origin,
                destination: this.props.route.destination,
                travelMode: travelMode,
                unitSystem: google.maps.UnitSystem.METRIC,
                waypoints: waypointArray,
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