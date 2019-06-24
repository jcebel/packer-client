import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeView from './views/HomeView';

function App() {
    return (
        <Router>
            <div>
                {
                    //TODO : This needs to be routed to the home component @MaxiPfeiler
                }
                <Route exact path="/" component={HomeView}/>
            </div>
        </Router>
    );
}

export default App;
