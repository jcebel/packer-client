import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from "react-bootstrap/Image";

export class AuctionStatusDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(eventKey) {
        this.props.triggerFilter("auctionStatus", {inputValue: eventKey, resolveAttribute: this.props.resolver})
    }

    render() {
        const imageSize="65px";
        return (
            <DropdownButton variant="outline-secondary" id="packer-vehicle-dropdown" title="Auction Status">
                <Dropdown.Item as="button" eventKey="winner" onSelect={this.handleClick}><Image src="Images/winner.png" height={imageSize}/></Dropdown.Item>
                <Dropdown.Item as="button" eventKey="looser" onSelect={this.handleClick}><Image src="Images/looser.png" height={imageSize}/></Dropdown.Item>
                <Dropdown.Item as="button" eventKey="leader" onSelect={this.handleClick}><Image src="Images/leader.png" height={imageSize}/></Dropdown.Item>
                <Dropdown.Item as="button" eventKey="nonLeader" onSelect={this.handleClick}><Image src="Images/nonLeader.png" height={imageSize}/></Dropdown.Item>
            </DropdownButton>
        )
    }
}