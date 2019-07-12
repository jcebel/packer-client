import React from 'react';
import Container from "react-bootstrap/Container";
import {Page} from "./Page";
import {StatusBadge} from "./StatusBadge";
import Figure from "react-bootstrap/Figure";

export class DeliveryDetails extends React.Component{

    render(){
        return <div>
                <span className="h4">
                    {this.props.data.name}
                    {" "}
                    <StatusBadge deliveryState={this.props.data.deliveryState}/>
                </span>
                <p/>
                    <div className="font-weight-bold" >Package Details:</div>
                    Size: {this.props.data.size}<br/>
                    Weight: {this.props.data.weight}<br/>
                    Distance: TODO<br/>
                    Price: {this.props.data.price}<br/>
                <div>{JSON.stringify(this.props.data)}</div>
            </div>
    }
}