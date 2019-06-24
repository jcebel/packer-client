import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from './components/Page';
import Home from './components/Home';
import RegisterDeliveryRequest from './components/RegisterDeliveryRequest'

function App() {
    return (
        <Router>
            <div>
                {
                    //{this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                }
                <Route exact path="/" component={Home}/>
                <Route exact path="/sendanything" component={RegisterDeliveryRequest}/>
            </div>
        </Router>
    );
}

export default App;
