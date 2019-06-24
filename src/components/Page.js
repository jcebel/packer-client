import React from 'react';
import {NavigationBar} from './NavigationBar';

/*
Source:https://github.com/sebischair/sebamaster-movie-frontend
 */

export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
        this.setState({
            title: document.title
        });
    }

    render() {
        return (
            <section>
                <NavigationBar/>
                {this.props.children}
            </section>
        );
    }
}

