import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from './components/Page';
import Home from './components/Home';

function App() {
    return (
    <Page>
        <Router>
            <div>
                {
                    //TODO : This needs to be routed to the home component @MaxiPfeiler
                }
                <Route exact path="/" component={Home}/>
            </div>
        </Router>
    </Page>
    );
}

export default App;
