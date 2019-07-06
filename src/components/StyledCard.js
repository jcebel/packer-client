import React from 'react';
import { Card } from 'react-bootstrap';

export class StyledCard extends React.Component {
    /**
     * Inline Styling is necessary, as bootstrap.css contains a '.table th' statement, which has higher prio
     * then styled-comonents statements.
     * @returns {*}
     */
    render() {
        return (<Card style={{'height':'350px'}}>{this.props.children}</Card>)
    }
}

