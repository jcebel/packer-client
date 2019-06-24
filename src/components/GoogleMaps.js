import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyle = {
    width: '100%',
    height: '100%',
};
class GoogleMaps extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyle}
                initialCenter={{ lat: 48.262235, lng: 11.670273}}
            />
        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAf7aIGVns1ktVf5sw__NGaygucuRsqCiw'
})(GoogleMaps);

