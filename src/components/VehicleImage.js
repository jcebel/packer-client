import React from 'react';
import Image from 'react-bootstrap/Image';

export class VehicleImage extends React.Component {

    render() {
        return <Image src={`Images/${this.props.vehicleType}.svg`}/>
    }
}