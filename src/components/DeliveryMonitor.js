import React, { Component } from 'react';
import Page from "./Page";
import MonitorRow from "./MonitorRow";

class DeliveryMonitor extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidUpdate(prevProps) {
        console.log("Prev Props: " + JSON.stringify(prevProps));
        if (!prevProps.loadingDone && this.props.loadingDone) {
            this.setState({data: this.props.data});
        }
    }

    render() {
        return (
            <Page activetab="delivery">
                {this.props.loadingDone ? this.state.data.map((deliverygood) => <MonitorRow key={deliverygood._id}
                                                                                       deliverygood={deliverygood}/>) :
                    "Empty"}
            </Page>
        )
    }
}
export default DeliveryMonitor;