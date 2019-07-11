import React from 'react';
import {PlainNavigationBar} from './NavigationBar';

/*
Source:https://github.com/sebischair/sebamaster-movie-frontend
 */

export class Page extends React.Component {

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
                <PlainNavigationBar activetab={this.props.activetab}/>
                {this.props.children}
            </section>
        );
    }
}

