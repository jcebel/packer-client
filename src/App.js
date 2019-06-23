import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';

function App() {
    return (
        <Router>
            <div>
                {
                    //TODO : This needs to be routed to the home component @MaxiPfeiler
                }
                <Route exact path="/" component={NavigationBar}/>
            </div>
        </Router>
    );
}

export default App;
