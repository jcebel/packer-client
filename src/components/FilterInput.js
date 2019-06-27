import React from 'react';
import Form from 'react-bootstrap/Form';

export class FilterInput extends React.Component {

    createFilterCriteria(event) {
        return {inputValue: event.target.value, resolveAttribute: this.props.resolver}
    }

    render() {
        return (
            <Form.Control key={this.props.identifier} as="input" placeholder={this.props.placeholder} type="text"
                          defaultValue={this.props.defaultValue}
                          onInput={(event) => {
                              this.props.onInputChanged(this.props.identifier, this.createFilterCriteria(event));
                          }}/>);
    }
}