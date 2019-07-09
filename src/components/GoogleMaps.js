/*global google*/
import React from 'react';
import {Marker, InfoWindow} from "react-google-maps";
import { geolocated } from "react-geolocated";

const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} = require("react-google-maps");

const GoogleMaps = compose(
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
            var collect = this.props.route.collect;
            var deliver = this.props.route.deliver;

            var origin = collect[0];
            var destination = deliver[deliver.length-1];

            collect.splice(0,1);
            deliver.splice(deliver.length-1,1);

            var receivedWaypoints = collect.concat(deliver);
            var waypointArray = [];
            receivedWaypoints.forEach(function(element) {
                var adress = element.street + " " + element.houseNumber + ", " + element.postalCode + " " + element.city;
                waypointArray.push({location: adress,  stopover: true});
            });

            const DirectionsService = new google.maps.DirectionsService();

            var travelMode = '';
            if((this.props.route.vehicleType.toLowerCase() === 'car') || (this.props.route.vehicleType.toLowerCase() === 'van')){
                travelMode = google.maps.TravelMode.DRIVING;
            } else if(this.props.route.vehicleType.toLowerCase() === 'bike'){
                travelMode = google.maps.TravelMode.BICYCLING;
            } else{
                travelMode = google.maps.TravelMode.DRIVING;
            }
            DirectionsService.route({
                origin: origin.street + " " + origin.houseNumber + ", " + origin.postalCode + " " + origin.city,
                destination: destination.street + " " + destination.houseNumber + ", " + destination.postalCode + " " + destination.city,
                travelMode: travelMode,
                unitSystem: google.maps.UnitSystem.METRIC,
                waypoints: waypointArray,
                optimizeWaypoints: false,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                        longitude: this.props.coords.longitude,
                        latitude:  this.props.coords.latitude,
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
        <Marker position={new google.maps.LatLng(props.latitude,props.longitude)}/>
    </GoogleMap>
);

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GoogleMaps);