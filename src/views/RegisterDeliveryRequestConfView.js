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
        console.log(this.props.location.data);
        return (
            <section>
                <RegisterDeliveryRequestConf datadr = {this.props.location.data}/>
                {this.props.children}
            </section>
        );
    }
}
