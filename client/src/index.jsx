import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/SearchBar.jsx';
import Location from './components/LocationSelector.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: {
        location: "",
        search: ""
      },
      data: [],
    }
    console.log('onSearch props', this.props);
  }

  search(value) {
    console.log('Get the combo', this.state.value);
    $.ajax({
        type:"POST",
        url:"/event",
        data: `${this.state.value}`,
        success: function() {
          console.log('Post Data Success')
        }
    })
  }

  componentDidMount() {
    // setState({
    // data:
    // $.ajax({
    //     type:"GET",
    //     url:"/home",
    //     // data: data,
    //     success: function() {
    //       console.log('Post Data Success')
    //     }
    // })
  }

  render() {
    return(
      <div>
        <p>We up</p>
        <Search onSearch={this.search.bind(this)}/>
        <Location location={this.onChange}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
        // <Location onChange={this.handleLocation.bind(this)}/>
