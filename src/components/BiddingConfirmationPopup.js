import React from "react";
import Popup from "reactjs-popup";

export class BiddingConfirmationPopup extends React.Component {

    isEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        return (
            <Popup trigger={<button type="submit" className="btn btn-primary mr-2">Submit</button>}
            position={"top center"} disabled={!this.isEmpty(this.props.error)}
            >
                <div><b>Submitted successfully!</b></div>
            </Popup>
        );
    }
}