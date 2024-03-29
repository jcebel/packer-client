import React from 'react';

export class StyledCell extends React.Component {
    /**
     * Inline Styling is necessary, as bootstrap.css contains a '.table td' statement, which has higher prio
     * then styled-comonents statements.
     * @returns {*}
     */
    render() {
        return (<td style={{'textAlign': 'center', 'verticalAlign': 'middle'}}>{this.props.children}</td>)
    }
}

