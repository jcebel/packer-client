import React from 'react';
import {PlainNavigationBar} from './NavigationBar';
import {ErrorHandler} from './ErrorHandler';

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
            <ErrorHandler>
                <section>
                    <PlainNavigationBar activetab={this.props.activetab}/>
                    {this.props.children}
                </section>
            </ErrorHandler>
        );
    }
}

