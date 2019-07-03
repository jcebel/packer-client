import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomeView} from './views/HomeView';
import {BiddingProcessView} from "./views/BiddingProcessView";
import {RoutesListView} from "./views/RoutesListView";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Packer',
            routes: [
                { component: HomeView , path: '/', exact: true},
                //{ component: RegisterDeliveryRequestView , path: '/sendanything'},
                { render: (props) => {return (<RegisterDeliveryRequestView {... props} />)} , path: '/sendanything'},
                { render: (props) => {return (<RegisterDeliveryRequestConfView {... props} />)} , path: '/sendanythingconf'}
                //{ component: RegisterDeliveryRequestConfView , path: '/sendanythingconf'}

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
