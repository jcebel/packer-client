import React from 'react';
import {RoutesList} from '../components/RoutesList';
import {RouteService} from '../services/RouteService';

export class RoutesListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingDone: true,
            data: [],
            filteredData: []
        };
    }

    componentWillMount() {
        this.setState({
            loadingDone: false
        });
        //TODO: USe getRoutesByDate, when the Database contains real data.
        RouteService.getRoutes()
            .then((data) => {
                this.setState({
                    data: [...data],
                    loadingDone: true,
                    filteredData: [...data]
                });
            }).catch((e) => {
            console.log(e);
        });
    }

    triggerFilterDataOnInput(filterCriteria) {
        const doesAttributeMatch = (criteriaName, row) => {
            console.log("Does Attribute match called for " + filterCriteria[criteriaName]);
            const attribute = filterCriteria[criteriaName].resolveAttribute(row)
            if (attribute) {
                return attribute.startsWith(filterCriteria[criteriaName].inputValue);
            }
            return false;
        }
        const filter = (data) => {
            return data.filter((row) => {
                console.log("Filter called for " + row);
                const array = Object.getOwnPropertyNames(filterCriteria).map((criteria) =>
                    doesAttributeMatch(criteria, row));
                return array.reduce((total, currentValue) => total && currentValue, true);
            });

        };
        if (filterCriteria) {
            const oldData = [...this.state.data];
            const filteredData = filter(this.state.data);
            this.setState({
                data: [...oldData],
                loadingDone: true,
                filteredData: [...filteredData]
            });
        }
    }

    render() {
        return (
            <RoutesList key={"routesList01"} loadingDone={this.state.loadingDone} data={this.state.filteredData}
                        triggerFilterOnInput={(criteria) => this.triggerFilterDataOnInput(criteria)}/>
        );
    }
}