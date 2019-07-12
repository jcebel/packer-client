import React from 'react';
import {DeliveryGoodService} from "../services/DeliveryGoodService";

export class DeliveryDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            delGood: {}
        };
    };

    componentWillMount() {
        this.setState({
            loadingDone: false
        });
        this.refreshDelGoodData();
    }

    refreshDelGoodData(){
        let id = this.props.match.params.id;
        id = "5d286e9fae02f13a9893801b";
        DeliveryGoodService.getDeliveryGood(id).then((data) => {
            this.setState({
                delGood: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.refreshDelGoodData(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <div>{JSON.stringify(this.state.delGood)}</div>
        );
    }
}