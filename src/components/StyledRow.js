import React from 'react';
import { Row } from 'react-bootstrap';

export class StyledRow extends React.Component {
    /**
     * Inline Styling is necessary, as bootstrap.css contains a '.table th' statement, which has higher prio
     * then styled-comonents statements.
     * @returns {*}
     */
    render() {
        return (<Row style={{'height':'350px'}}>{this.props.children}</Row>)
    }
}

