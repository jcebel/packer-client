import React from 'react';
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {DeliveryDetails} from "../components/DeliveryDetails";
import {Card, Col, Container} from "react-bootstrap";
import {Page} from "../components/Page";
import DeliveryGoodMap from "../components/DeliveryGoodMap";
import Row from "react-bootstrap/Row";
import styled from 'styled-components/macro';
import {StatusBadge} from "../components/StatusBadge";

const StyledRow = styled(Row)`height:"350px"`;
const StyledCard = styled(Card)`height:"350px"`;


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
                    <span className="h2">
                        {this.state.data.name}
                        {" "}
                        <StatusBadge deliveryState={this.state.data.deliveryState}/>
                    </span>
                    <p/>
                    <StyledRow>
                        <Col sm={8}>
                            <StyledCard>
                                <DeliveryGoodMap markerLocation={{lat: 48.262235, lng: 11.670273}}/>
                            </StyledCard>

                        </Col>
                        <Col>
                            <DeliveryDetails loading={this.state.loading} data={this.state.data}/>
                        </Col>
                    </StyledRow>
                    {/*<Row>{JSON.stringify(this.state.data)}</Row>*/}
                </Container>
            </Page>
        );
    }
}