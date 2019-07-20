import React from 'react';
import RegisterDeliveryRequestConf from '../components/RegisterDeliveryRequestConf';

export default class RegisterDeliveryRequestConfView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.setState({});
    }

    render() {
        return (
            <section>
                <RegisterDeliveryRequestConf datadr={this.props.location.data}/>
                {this.props.children}
            </section>
        );
    }

}
