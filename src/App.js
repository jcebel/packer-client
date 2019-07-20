import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {HomeView} from './views/HomeView';
import {BiddingProcessView} from "./views/BiddingProcessView";
import {RoutesListView} from "./views/RoutesListView";
import RegisterDeliveryRequestView from "./views/RegisterDeliveryRequestView";
import RegisterDeliveryRequestConfView from "./views/RegisterDeliveryRequestConfView";
import {RegistrationView} from "./views/RegistrationView";
import {LoginView} from "./views/LoginView";
import {AuthService} from "./services/AuthService";
import {DeliveryMonitorView} from "./views/DeliveryMonitorView"
import {DeliveryDetailsView} from "./views/DeliveryDetailsView";
import {AsyncUserTypeRouting} from "./views/AsyncUserTypeRouting";
import {Error404} from "./components/Error404"

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Packer',
            routes: [
                {component: HomeView, path: '/', exact: true},
                {
                    render: (props) => {
                        if (AuthService.isAuthenticated()) {
                            return (<RegisterDeliveryRequestView{...props}/>)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/sendanything', exact: true
                },
                {
                    render: (props) => {
                        return (<RegisterDeliveryRequestConfView{...props} />)
                    }, path: '/sendanythingconf', exact: true
                },
                {
                    render: (props) => {
                        if (AuthService.isAuthenticated()) {
                            return (<BiddingProcessView {...props} />)
                        } else {
                            return (<Redirect to={{pathname: '/login', prevPath: '/beAdriver'}}/>)
                        }
                    }, path: '/route/:id', exact: true
                },
                {
                    render: (props) => {
                        if (AuthService.isAuthenticated()) {
                            return <AsyncUserTypeRouting {...props} component={RoutesListView} path={'/beAdriver'}
                                                         missingCheckbox="driver"
                                                         query={AuthService.isUserADriver}/>;
                        } else {
                            return (<Redirect to={{pathname: '/login', prevPath: '/beAdriver'}}/>)
                        }
                    }, path: '/beAdriver', exact: true
                },
                {
                    render: (props) => {
                        if (AuthService.isAuthenticated()) {
                            return <AsyncUserTypeRouting {...props} component={DeliveryMonitorView}
                                                         path={'/deliverymonitor'}
                                                         missingCheckbox="deliveryClient"
                                                         query={AuthService.isUserADeliveryClient}/>;
                        } else {
                            return (<Redirect to={{pathname: '/login', prevPath: '/deliverymonitor'}}/>)
                        }
                    }, path: '/deliverymonitor', exact: true
                },
                {
                    render: (props) => {
                        if (AuthService.isAuthenticated()) {
                            return (<DeliveryDetailsView{...props}/>)
                        } else {
                            return (<Redirect to={{pathname: '/login', prevPath: '/deliverymonitor'}}/>)
                        }
                    }, path: '/deliverydetails/:id', exact: true
                },
                {component: RegistrationView, path: '/register', exact: true},
                {component: LoginView, path: '/login', exact: true},
                {component: Error404, path: '/*', exact: true}
            ]
        };
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>))}
                    </Switch>
                </Router>
            </div>
        );
    }
}
