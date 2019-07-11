import React from 'react';
import {DeliveryMonitor} from "../components/DeliveryMonitor";
import {UserService} from "../services/UserService";
import {DeliveryGoodService} from "../services/DeliveryGoodService";


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
        this.refreshDeliveryData()
    }

    refreshDeliveryData(){
        let id = this.props.match.params.id;
        UserService.getDeliveriesByUserId(id)
            .then((data) => {
                this.setState({
                    data: data,
                    loadingDone: true
                });
            }).catch((e) => {
            console.error(e);
        });
    }

    deleteDeliveryGood(id){
        this.setState({
            data: [...this.state.data],
            loadingDone: false
        });
        DeliveryGoodService.deleteDeliveryGood(id).then(() =>{

            let deliveryGoodIndex = this.state.data.map(deliverygood => deliverygood['_id']).indexOf(id);
            let deliverygoods = this.state.data;
            deliverygoods.splice(deliveryGoodIndex, 1);
            this.setState({
                data: [...deliverygoods],
                loadingDone: true
            });
            }).catch((e) => {
                console.error(e);
            }
        )
    }

    render(){
        return (
            <DeliveryMonitor loadingDone={this.state.loadingDone} data={this.state.data} onDelete={(id) => this.deleteDeliveryGood(id)}/>
        );
    }
}