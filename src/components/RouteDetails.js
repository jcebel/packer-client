import React from 'react';


export class RouteDetails extends React.Component{

    render() {

        return (
                <div>
                    <h4>Route Details</h4>
                    <div className="font-weight-bold">Length</div>
                    <p>
                        {`${this.props.route.meters / 1000} km`}
                    </p>
                    <div className="font-weight-bold">Estimated time</div>
                    <p>
                        {`${this.props.route.estimatedTime / 3600} hours`}
                    </p>
                    <div className="font-weight-bold">Number of packages</div>
                    <p>
                        {this.props.route.items.length}
                    </p>
                </div>
        );
    }

}
