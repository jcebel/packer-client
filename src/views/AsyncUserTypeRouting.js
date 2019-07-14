import React from 'react';
import {Redirect} from "react-router-dom";

/**
 * Renders a redirect to the RegistrationView, if the given async query returns a false value.
 */
export class AsyncUserTypeRouting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {decision: false}
    }

    componentDidMount() {
        this.props.query().then((value) => {
            this.setState({
                decision: true,
                value: value
            })
        }).catch((err) => console.log(new Date(), err));
    }

    render() {
        if (this.state.decision) {
            return this.state.value ? React.createElement(this.props.component) :
                <Redirect to={{
                    pathname: "/register",
                    state: {redirectTo: this.props.path, missingCheckbox: this.props.missingCheckbox}
                }}/>;
        } else {
            return (<h1>Authorization needs to be checked... Please Wait.</h1>)
        }
    }
}