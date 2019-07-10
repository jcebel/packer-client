import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {FormControl} from "react-bootstrap";

 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ''
                    };
  }
 
  handleChange = address => {
    this.setState({ address });
    var addressInput = address;
    this.props.onSelectAdd(addressInput);
  };
 
  handleSelect = address => {

    geocodeByAddress(address)
      .then(results => console.log(results))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
    
    geocodeByAddress(address)
      .then(results => this.handleChange(results[0].address_components[0].long_name))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    const selectedAddress = this.state;
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
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
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
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