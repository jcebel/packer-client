import React from "react";
import Popup from "reactjs-popup";

export class BiddingConfirmationPopup extends React.Component {

    render() {
        return (
            <Popup trigger={<button type="submit" className="btn btn-primary mr-2" disabled={this.props.disabled}>Submit</button>}
                   modal
            >
                <div>New bid successfully submitted!</div>
            </Popup>
        );
    }
}