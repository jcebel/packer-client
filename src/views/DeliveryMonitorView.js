import React from 'react';
import DeliveryMonitor from "../components/DeliveryMonitor";
import DeliveryClientService from "../services/DeliveryClientService";
import UserService from "../services/UserService";


export class DeliveryMonitorView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingDone: true,
            data: []
        }
    };

    componentWillMount() {
        this.setState({
            loadingDone: false
        });

        let id = this.props.match.params.id;
        console.log("User id: "+ this.props.match.params.id);
        id = "5d1d2ab58850e61b400671de";
        DeliveryClientService.getDeliveriesByUserId(id)
            .then((data) => {
                //console.log("DelMonView.data" + data);
                this.setState({
                    data: data,
                    loadingDone: true
                });
                console.log("Onfulfilled State: " + JSON.stringify(this.state))
            }).catch((e) => {
                console.log(e);
        });
    }

    render(){
        console.log("render State: " + JSON.stringify(this.state));
        return (
            <DeliveryMonitor loadingDone={this.state.loadingDone} data={this.state.data}/>
        );
    }
}