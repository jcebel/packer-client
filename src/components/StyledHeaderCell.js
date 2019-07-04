import React from 'react';

export class StyledHeaderCell extends React.Component {
    /**
     * Inline Styling is necessary, as bootstrap.css contains a '.table th' statement, which has higher prio
     * then styled-comonents statements.
     * @returns {*}
     */
    render() {
        return (<th style={{'textAlign':'center', 'verticalAlign':'middle'}}>{this.props.children}</th>)
    }
}

