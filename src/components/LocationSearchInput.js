import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress
} from 'react-places-autocomplete';
import {FormControl} from "react-bootstrap";


//https://www.npmjs.com/package/react-places-autocomplete
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '',
                  city : ''
                    };
  }
 
  handleChange = (address,city) => {
    this.setState({ address : address,
                    city : city});
    var addressInput = address;


    this.props.onSelectAdd(addressInput, city);
  };
 
  handleSelect = address => {

   /* geocodeByAddress(address)
      .then(results => console.log(results))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
    */
    geocodeByAddress(address)
      .then(results => this.handleChange(results[0].address_components[0].long_name, results[0].address_components[2].long_name))
      //.then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
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