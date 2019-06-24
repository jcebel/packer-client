import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from './components/Page';
import Home from './components/Home';
import RegisterDeliveryRequest from './components/RegisterDeliveryRequest'

function App() {
    return (
        <Router>
            <Page/>
            <div>
                {
                    //TODO : This needs to be routed to the home component @MaxiPfeiler
                }
                <Route exact path="/" component={Home}/>
                <Route path="/sendanything" component={RegisterDeliveryRequest}/>
            </div>
        </Router>
    );
}

export default App;
