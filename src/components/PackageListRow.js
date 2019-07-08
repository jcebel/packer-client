import React from 'react';
import {StyledCell} from "./StyledCell";

export class PackageListRow extends React.Component{

    render() {
        return(
            <tr>
                <StyledCell>{this.props.index}.</StyledCell>
                <StyledCell>{this.props.route.name}</StyledCell>
                <StyledCell>{this.props.route.weight}</StyledCell>
                <StyledCell>{this.props.route.size}</StyledCell>
            </tr>
        )
    }
}
