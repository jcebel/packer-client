import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <NavigationBar/>
            <div>
                {
                    //TODO : This needs to be routed to the home component @MaxiPfeiler
                }
                <Route exact path="/" component={Home}/>
            </div>
        </Router>
    );
}

export default App;
