import React from 'react';
import styled from 'styled-components';

export class StyledCell extends React.Component {
    /**
     * Inline Styling is necessary, as bootstrap.css contains a '.table td' statement, which has higher prio
     * then styled-comonents statements.
     * @returns {*}
     */
    render() {
        return (<td style={{'text-align':'center', 'vertical-align':'middle'}}>{this.props.children}</td>)
    }
}

