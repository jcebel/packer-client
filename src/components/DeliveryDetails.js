import React from 'react';

export class DeliveryDetails extends React.Component{

    render(){
        return <div>
                    <div className="font-weight-bold" >Delivery Details:</div>
                    Size: {this.props.data.size}<br/>
                    Weight: {this.props.data.weight}<br/>
                    Distance: TODO<br/>
                    Price: {this.props.data.price}<br/>
            </div>
    }
}