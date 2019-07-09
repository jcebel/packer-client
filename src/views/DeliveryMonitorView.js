import React from 'react';
import {DeliveryMonitor} from "../components/DeliveryMonitor";
import {UserService} from "../services/UserService";


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
        UserService.getDeliveriesByUserId(id)
            .then((data) => {
                this.setState({
                    data: data,
                    loadingDone: true
                });
            }).catch((e) => {
                console.log(e);
        });
    }

    render(){
        return (
            <DeliveryMonitor loadingDone={this.state.loadingDone} data={this.state.data}/>
        );
    }
}