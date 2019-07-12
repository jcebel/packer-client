import React from 'react';
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {DeliveryDetails} from "../components/DeliveryDetails";
import {Container} from "react-bootstrap";
import {Page} from "../components/Page";


export class DeliveryDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: {}
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
        DeliveryGoodService.getDeliveryGood(id).then((data) => {
            this.setState({
                data: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.refreshDelGoodData(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page activetab="delivery">
                <Container>
                    <DeliveryDetails loading={this.state.loading} data={this.state.data}/>
                </Container>
            </Page>
        );
    }
}