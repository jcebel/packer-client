import React from 'react';
import {Error} from './Error';

export class ErrorHandler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {errorOccurred: false}
    }

    componentDidCatch(error, info) {
        this.setState({errorOccurred: true})
    }

    render() {
        return this.state.errorOccurred ? <Error message="Something went wrong!"/> : this.props.children
    }
}
