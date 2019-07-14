import React from 'react';


export class RouteDetails extends React.Component{

    secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);

        var hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
        return hDisplay + mDisplay;
    }

    render() {

        return (
                <div>
                    <h4>Route Details</h4>
                    <div className="font-weight-bold">Length</div>
                    <p>
                        {`${(this.props.route.meters / 1000).toFixed(1)} km`}
                    </p>
                    <div className="font-weight-bold">Estimated time</div>
                    <p>
                        {this.secondsToHms(this.props.route.estimatedTime)}
                    </p>
                    <div className="font-weight-bold">Number of packages</div>
                    <p>
                        {this.props.route.items.length}
                    </p>
                </div>
        );
    }

}
