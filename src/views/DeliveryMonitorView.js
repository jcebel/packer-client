"use strict";

import React from 'react';
import MonitorList from "../components/MonitorList";


export class DeliveryMonitorView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MonitorList/>
        );
    }
}