import React from 'react';


export class RouteDetails extends React.Component{

    render() {

        let arrivalTimes = this.props.route.estimatedArrivalTimes;
        return (
                <div>
                    <h4>Route Details</h4>
                    <div className="font-weight-bold">Length</div>
                    <p>
                        {this.props.route.kilometers} km
                    </p>
                    <div className="font-weight-bold">Estimated time</div>
                    <p>
                        {(new Date(arrivalTimes.reduce(function (a, b) { return a > b ? a : b; })) - new Date(arrivalTimes.reduce(function (a, b) { return a < b ? a : b; })))/(3600*1000)} hours
                    </p>
                    <div className="font-weight-bold">Number of packages</div>
                    <p>
                        {this.props.route.items.length}
                    </p>
                </div>
        );
    }

}
