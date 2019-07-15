import React from 'react';
import {Form} from 'react-bootstrap';

export class FilterInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    createFilterCriteria(event) {
        return {
            inputValue: event.target.value,
            resolveAttribute: this.props.resolver,
            compareTo: (attribute, inputValue) => {
                return attribute.toLowerCase().startsWith(inputValue.toLowerCase());
            }
        }
    }

    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
        this.props.triggerFilter(event.target.name, this.createFilterCriteria(event))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.triggerUpdate !== this.props.triggerUpdate) {
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <Form.Control type="text"
                          value={this.state.value}
                          name={this.props.placeholder}
                          placeholder={this.props.placeholder}
                          onChange={this.handleInputChange}></Form.Control>
        )
    }
}