import React from 'react';


// simple rendering for Location
// dropdown menu

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }

    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation(event) {
    this.setState({
      location: event.target.value
    })
  }

  render() {
    return (
      <div>
        <span>Select Location</span>
        <select value={this.state.location} onChange={this.handleLocation}>
          <option value="San Francisco" active>San Francisco</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="New York">New York</option>
        </select>
      </div>
    );
  }
}

export default Location;