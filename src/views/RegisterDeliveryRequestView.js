import React from 'react';
import RegisterDeliveryRequest from '../components/RegisterDeliveryRequest';

/*
Source:https://github.com/sebischair/sebamaster-movie-frontend
 */

export default class RegisterDeliveryRequestView extends React.Component {

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
                <RegisterDeliveryRequest/>
                {this.props.children}
            </section>
        );
    }
}
