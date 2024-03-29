import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import GoogleMaps from '../components/GoogleMaps'
import {RouteDetails} from "../components/RouteDetails";
import {PackageList} from "../components/PackageList";
import {BiddingInformation} from "../components/BiddingInformation";
import {RouteService} from "../services/RouteService";
import {Page} from "../components/Page";
import styled from 'styled-components/macro';
import {UserService} from "../services/UserService";
import {Error} from "../components/Error";

const StyledRow = styled(Row)`height:"350px"`;
const StyledCard = styled(Card)`height:"350px"`;

export class BiddingProcessView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            route: {},
            driverID: undefined
        };
        this.drivingStarts = this.drivingStarts.bind(this);
        this.drivingStopped = this.drivingStopped.bind(this);
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        UserService.getDriverId().then((data) => {
            this.setState({
                driverID: data
            });
        }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
        this.refreshRouteData();
    }

    refreshRouteData() {
        let id = this.props.match.params.id;
        RouteService.getRoute(id).then((data) => {
            this.setState({
                route: data,
                loading: false
            });
        }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
    }

    drivingStarts() {
        if (!this.state.loading) {
            RouteService.sendDrivingStarts(this.state.route._id)
                .catch((e) => {
                    this.setState({error: e});
                    console.error(e);
                });
        }
    };

    drivingStopped() {
        if(!this.state.loading) {
            RouteService.sendDrivingStopped(this.state.route._id)
                .catch((e) => {
                    this.setState({error: e});
                    console.error(e);
                });
        }
    };

    componentDidMount() {
        this.interval = setInterval(() => this.refreshRouteData(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        if (this.state.error) {
            return <Error message={this.state.error}/>
        }
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page activetab="driver">
                <Container>
                    <StyledRow>
                        <Col sm={8}>
                            <StyledCard>
                                <GoogleMaps route={this.state.route}/>
                            </StyledCard>
                            <BiddingInformation route={this.state.route} driverID={this.state.driverID}
                                                onSubmit={(id, newBid) => this.submitBidByID(id, newBid)}
                                                startDriving={this.drivingStarts}
                                                stopDriving={this.drivingStopped}/>

                        </Col>
                        <Col sm={4}>
                            <RouteDetails route={this.state.route}/>
                            <PackageList route={this.state.route}/>
                        </Col>
                    </StyledRow>
                </Container>
            </Page>
        );
    }

    submitBidByID(id, newBid) {
        let route = {
            "_id": id,
            "bid": newBid
        };
        RouteService.updateRoute(route).then(() => {
            RouteService.getRoute(id).then((data) => {
                this.setState({
                    route: data,
                    loading: false
                });
            }).catch((e) => {
                this.setState({error: e});
                console.error(e);
            });
        }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
    }

}