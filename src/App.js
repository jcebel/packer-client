import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {HomeView} from './views/HomeView';
import {BiddingProcessView} from "./views/BiddingProcessView";
import {RoutesListView} from "./views/RoutesListView";
import RegisterDeliveryRequestView from "./views/RegisterDeliveryRequestView";
import RegisterDeliveryRequestConfView from "./views/RegisterDeliveryRequestConfView";
import {RegistrationView} from "./views/RegistrationView";
import {LoginView} from "./views/LoginView";
import UserService from "./services/UserService";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Packer',
            routes: [
                { component: HomeView , path: '/', exact: true},
                //{ component: RegisterDeliveryRequestView , path: '/sendanything'},
                { render: (props) => {return (<RegisterDeliveryRequestView {... props} />)} , path: '/sendanything'},
                { render: (props) => {return (<RegisterDeliveryRequestConfView {... props} />)} , path: '/sendanythingconf'},
                { component: BiddingProcessView , path: '/route/:id', exact: true},
                { component: RoutesListView, path: '/beAdriver', exact:true},
                { render: (props) => {
                    if(UserService.isAuthenticated()){
                        return (<BiddingProcessView {... props} />)
                    }
                    else{
                        return (<Redirect to={'/login'}/>)
                    }
                    }, path: '/route/:id', exact: true},
                { render: (props) => {
                    if(UserService.isAuthenticated()){
                        return (<RoutesListView{... props}/>)
                    }
                    else{
                        return (<Redirect to={'/login'}/>)
                    }
                    }, path: '/beAdriver', exact:true},
                { component: RegistrationView, path: '/register', exact:true},
                { component: LoginView, path: '/login', exact:true},
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
