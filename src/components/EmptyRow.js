import React from 'react';

export class EmptyRow extends React.Component {
    render() {
        return (<tr><td>{this.props.text}</td></tr>);
    }
}