import React from 'react';

export class PackageListRow extends React.Component{

    render() {
        return(
            <tr>
                <td>{this.props.index}.</td>
                <td>{this.props.route.name}</td>
                <td>{this.props.route.weight}</td>
                <td>{this.props.route.size}</td>
            </tr>
        )
    }
}
