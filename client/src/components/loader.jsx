import React from 'react';

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  render() {
    return(
      if (this.state.isLoading) {
        <img src="./assets/spin.gif" height="50px" width="50px" alt="Loading spinner">
      }
    )
  }
}
