import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress
} from 'react-places-autocomplete';
import {FormControl} from "react-bootstrap";

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            city: '',
            postalcode: ''
        };
    }

    handleChange = (address, city) => {
        this.setState({
            address: address,
            city: city
        });
        let addressInput = address;
        this.props.onSelectAdd(addressInput, city);
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => this.handleChange(results[0].address_components.find((item) => {
                return item.types.includes("route");
            }).long_name, results[0].address_components.find((item) => {
                return item.types.includes("locality");
            }).long_name))
            .catch(error => this.setState({
                address: "",
                city: ""
            }));
    };

    onError = (e) => {
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                onError={this.onError}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        <FormControl
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';

                                const style = suggestion.active
                                    ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                    : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;