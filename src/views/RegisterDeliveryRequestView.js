import React from 'react';
import RegisterDeliveryClient from './components/RegisterDeliveryClient';

/*
Source:https://github.com/sebischair/sebamaster-movie-frontend
 */

export default class RegisterDeliveryClientView extends React.Component {

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
                <RegisterDeliveryClient/>
                {this.props.children}
            </section>
        );
    }
}
