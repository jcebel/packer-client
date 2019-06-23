import React, { Component } from 'react';


class RouteDetails extends Component{

    constructor(props) {
        super(props);
        console.log(this.props.route);

        if(this.props.route !== undefined) {
            this.state = {
                kilometers : props.route.kilometers
            };
        } else {
            this.state = {
                kilometers: 0
            };
        }

        this.handleChangeKilometers = this.handleChangeKilometers.bind(this);

    }

    handleChangeKilometers(value) {
        this.setState(Object.assign({}, this.state, {kilometers: value}));
    }

    render() {
        return (
                <div>
                    <h4>Route Details</h4>
                    <div className="font-weight-bold">Length</div>
                    <p>
                        {this.state.kilometers} km
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