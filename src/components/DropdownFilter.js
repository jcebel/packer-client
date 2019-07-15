import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export class DropdownFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(eventKey) {
        this.props.triggerFilter(this.props.identifier, {
            inputValue: eventKey,
            resolveAttribute: this.props.resolver,
            compareTo: this.props.compareTo
        })
    }

    render() {
        return (
            <DropdownButton variant="outline-secondary" id={this.props.identifier} title={this.props.title}>

                {this.props.items.map(item => {
                    return (<Dropdown.Item as="button" key={item.eventKey}
                                           eventKey={item.eventKey} onSelect={this.handleClick}>{item.child}</Dropdown.Item>)
                })}
            </DropdownButton>
        )
    }
}