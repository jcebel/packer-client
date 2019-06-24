import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeView from './views/HomeView';
import {BiddingProcessView} from "./views/BiddingProcessView";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Packer',
            routes: [
                { component: HomeView , path: '/', exact: true},
                { component: BiddingProcessView , path: '/route/:id', exact: true},
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

