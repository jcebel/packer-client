import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {InputGroup} from "react-bootstrap";

//https://react-day-picker.js.org/

export default class DatepickerClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    let today = new Date();
    this.state = {
      selectedDay: today,
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
    var datedr = day;
    this.props.onSelectDate(datedr);     
  }
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text>Select Date: {this.state.selectedDay.toLocaleDateString()}</InputGroup.Text>
              <InputGroup.Text><DayPickerInput onDayChange={this.handleDayChange}/></InputGroup.Text>
        </InputGroup.Prepend>
        </InputGroup>
      </div>
    );
  }
}