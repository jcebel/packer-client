import React from 'react';
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {DeliveryDetails} from "../components/DeliveryDetails";
import {Col, Container, Row} from "react-bootstrap";
import {Page} from "../components/Page";
import DeliveryGoodMap from "../components/DeliveryGoodMap";
import {StatusBadge} from "../components/StatusBadge";


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
            loading: true
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
                    <span className="h2">
                        {this.state.data.deliverygood.name}
                        {" "}
                        <StatusBadge deliveryState={this.state.data.deliverygood.deliveryState}/>
                    </span>
                    <p/>
                    <Row>
                        <Col sm={8} className="d-flex">
                            <DeliveryGoodMap markerLocation={{lat: 48.262235, lng: 11.670273}}/>
                        </Col>
                        <Col className="d-flex ml-2">
                            <DeliveryDetails loading={this.state.loading} data={this.state.data}/>
                        </Col>
                    </Row>
                </Container>
            </Page>
        );
    }
}