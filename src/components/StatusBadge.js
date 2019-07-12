import React from 'react';
import Badge from "react-bootstrap/Badge";

export class StatusBadge extends React.Component{

    statusBadgeVariant(){
        if(this.props.deliveryState === "In Delivery"){
            return "info";
        }
        else if(this.props.deliveryState === "Delivered"){
            return "success";
        }
        else if(this.props.deliveryState === "Waiting for Routing"){
            return "warning";
        }
        else if(this.props.deliveryState === "Waiting for Pickup"){
            return "primary";
        }
        else{
            return "dark";
        }
    };

    render() {
        return <Badge variant={this.statusBadgeVariant()}>{this.props.deliveryState}</Badge>
    }


}