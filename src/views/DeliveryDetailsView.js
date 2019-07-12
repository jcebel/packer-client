import React from 'react';

export class DeliveryDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingDone: true,
            data: []
        }
    };

    componentWillMount() {
        this.setState({
            loadingDone: false
        });
    }

    render() {
        return (
            <div>DeliveryDetailsView</div>
        );
    }
}