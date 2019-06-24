import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeView from './views/HomeView';
import RegisterDeliveryRequestView from './views/RegisterDeliveryRequestView';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Packer',
            routes: [
                { component: HomeView , path: '/', exact: true},
                { component: RegisterDeliveryRequestView , path: '/sendanything'}
            ]
        };
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}
