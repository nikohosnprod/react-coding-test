import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {startValue: ''};
    this.state = {endValue: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An address was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>AfterUber</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Starting Address:
            <input type="text" value={this.state.startValue} onChange={this.handleChange} />
          </label>
          <label>
            Ending Address:
            <input type="text" value={this.state.endValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <GoogleMapLoader
          containerElement={ <div style={{height: 500 }} /> }
          googleMapElement={
            <GoogleMap defaultZoom={12} defaultCenter={{lat: 34.0522, lng: 118.2437}} />
        }
      />
      </div>
    );
  }
}