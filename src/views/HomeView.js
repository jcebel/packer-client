import React from 'react';
import {Home} from '../components/Home';

export class HomeView extends React.Component {

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
                <Home/>
                {this.props.children}
            </section>
        );
    }
}