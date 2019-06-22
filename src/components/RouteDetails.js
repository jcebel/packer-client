import React, { Component } from 'react';

class RouteDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <div>
                    <h4>Route Details</h4>
                    <div className="font-weight-bold">Length</div>
                    <p>
                        4.4 km
                    </p>
                    <div className="font-weight-bold">Estimated time</div>
                    <p>
                        2 hours 15 min
                    </p>
                    <div className="font-weight-bold">Number of packages</div>
                    <p>
                        3
                    </p>
                </div>
        );
    }

}

export default RouteDetails;