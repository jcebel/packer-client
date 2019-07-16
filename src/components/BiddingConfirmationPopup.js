import React from "react";
import Popup from "reactjs-popup";

export class BiddingConfirmationPopup extends React.Component {

    render() {
        return (
            <Popup trigger={<button type="submit" className="btn btn-primary mr-2">Submit</button>}
            position={"top center"}
            >
                <div><b>Submitted successfully!</b></div>
            </Popup>
        );
    }
}