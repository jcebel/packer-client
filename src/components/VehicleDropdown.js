import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from "react-bootstrap/Image";

export class VehicleDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(eventKey) {
        this.props.triggerFilter("vehicleType", {inputValue: eventKey, resolveAttribute: this.props.resolver})
    }

    render() {
        return (
            <DropdownButton variant="outline-secondary" id="packer-vehicle-dropdown" title="Vehicle">
                <Dropdown.Item as="button" eventKey="bike" onSelect={this.handleClick}><Image src="Images/bike.svg"/></Dropdown.Item>
                <Dropdown.Item as="button" eventKey="car" onSelect={this.handleClick}><Image src="Images/car.svg"/></Dropdown.Item>
                <Dropdown.Item as="button" eventKey="van" onSelect={this.handleClick}><Image src="Images/van.svg"/></Dropdown.Item>
            </DropdownButton>
        )
    }
}