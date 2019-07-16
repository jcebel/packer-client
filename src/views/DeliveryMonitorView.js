import React from 'react';
import {DeliveryMonitor} from "../components/DeliveryMonitor";
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {Error} from "../components/Error";


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
        DeliveryGoodService.getDeliveryGoods()
            .then((data) => {
                this.setState({
                    data: data,
                    loadingDone: true
                });
            }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.refreshDeliveryData(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.setState({loadingDone: false})
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
                this.setState({error: e});
                console.error(e);
            }
        )
    }

    render(){
        if(this.state.error){
            return <Error message={this.state.error}/>
        }
        return (
            <DeliveryMonitor loadingDone={this.state.loadingDone} data={this.state.data} deleteitem={(id) => this.deleteDeliveryGood(id)}/>
        );
    }
}