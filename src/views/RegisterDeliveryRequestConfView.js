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
        return (
            <section>
                <RegisterDeliveryRequestConf/>
                {this.props.children}
            </section>
        );
    }
}
