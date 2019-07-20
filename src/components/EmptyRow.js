import React from 'react';
import Alert from "react-bootstrap/Alert";

export class EmptyRow extends React.Component {
    render() {
        return (<tr>
            <td colSpan={"8"}><Alert variant={"secondary"}>{this.props.text}</Alert></td>
        </tr>);
    }
}