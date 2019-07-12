import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import {Page} from "./Page";
import {MonitorRow} from "./MonitorRow";

export class DeliveryMonitor extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.loadingDone && typeof prevProps.data !== "undefined" && prevProps.data !== this.props.data){
            this.setState({data: this.props.data});
        }
    }

    render() {
        return (
            <Page activetab="delivery">
                {this.props.data.length !== 0 ? this.state.data.map((deliverygood) =>
                        <MonitorRow key={deliverygood._id}
                                    deliverygood={deliverygood}
                                    onDelete={(id) => {this.props.onDelete(id)}}/>) :
                    <Container>
                        You've got no deliveries yet... Start by Clicking on "Send anything"! ;)
                    </Container>}
            </Page>
        )
    }
}