import React from 'react';

export class DeliveryDetails extends React.Component{

    render(){
        return <div>{JSON.stringify(this.props.data)}</div>
    }
}