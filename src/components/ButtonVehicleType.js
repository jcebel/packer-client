import React from 'react';
import {Button} from "react-bootstrap";


export class ButtonVehicleType extends React.Component{

    render() {
        if (this.props.vehicleType === "van") {
            return (
                <div>
                    <Button variant="light" disabled>Car</Button>
                    <Button variant="secondary" disabled>Van</Button>
                    <Button variant="light" disabled>Bike</Button>
                </div>
            );
        }
        if (this.props.vehicleType === "car") {
            return (
                <div>
                    <Button variant="secondary" disabled>Car</Button>
                    <Button variant="light" disabled>Van</Button>
                    <Button variant="light" disabled>Bike</Button>
                </div>
            );
        }
        if (this.props.vehicleType === "bike") {
            return (
                <div>
                    <Button variant="light" disabled>Car</Button>
                    <Button variant="light" disabled>Van</Button>
                    <Button variant="secondary" disabled>Bike</Button>
                </div>
            );
        }
    }

}