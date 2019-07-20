import React from 'react';
import Badge from "react-bootstrap/Badge";

export class StatusBadge extends React.Component{

    statusBadgeVariant(){
        const deliveryState = this.props.deliveryState;
        if(deliveryState === "Delivered"){
            return "success";
        }
        else if(deliveryState === "In Delivery"){
            return "info";
        }
        else if(deliveryState === "Waiting for Routing"){
            return "warning";
        }
        else if(deliveryState === "Waiting for Pickup"){
            return "dark";
        }
        else if(deliveryState === "In Bidding Process"){
            return "secondary";
        }
        else if(deliveryState === "Cancelled"){
            return "danger";
        }
        else{
            return "dark";
        }
    };

    render() {
        return <Badge variant={this.statusBadgeVariant()}>{this.props.deliveryState}</Badge>
    }


}