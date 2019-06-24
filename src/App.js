import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeView from './views/HomeView';

function App() {
    return (
        <Router>
            <div>
                {
                    //{this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                }
                <Route exact path="/" component={HomeView}/>
            </div>
        </Router>
    );
}

export default App;
