import React from 'react';
import RegisterDeliveryRequestConf from '../components/RegisterDeliveryRequestConf';

/*
Source:https://github.com/sebischair/sebamaster-movie-frontend
 */

export default class RegisterDeliveryRequestConfView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount(){
        this.setState({
        });
    }

    render() {
        var datadr = {
            what : "Smartphone",
            start : "Boltzmannstr",
            end: "Schellingstr",
            size: "Large",
            weight: "Light",
            date: "7.5.2019"
        }
        return (
            <section>
                <RegisterDeliveryRequestConf data = {datadr}/>
                {this.props.children}
            </section>
        );
    }
}
