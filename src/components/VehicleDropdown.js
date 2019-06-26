import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from "react-bootstrap/Image";
export default class RoutesList extends React.Component {
    render() {
        return (
            <DropdownButton variant="outline-secondary" id="packer-vehicle-dropdown" title="Vehicle">
                <Dropdown.Item href="#/selectBike"><Image src="Images/bike.svg"/></Dropdown.Item>
                <Dropdown.Item href="#/selectCar"><Image src="Images/car.svg"/></Dropdown.Item>
                <Dropdown.Item href="#/selectVan"><Image src="Images/van.svg"/></Dropdown.Item>
            </DropdownButton>
        )
    }
}