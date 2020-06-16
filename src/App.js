import React, { Component } from 'react';
import SearchCard from './Components/SearchCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      searchTermEncoded:""
    };
  }

  onButtonSubmit = () => {
    const searchURL = 'https://itunes.apple.com/search?term=' + this.state.searchTermEncoded;
    fetch(searchURL)
        .then(response => response.json())
        .then(data => console.log(data))
  }

  onInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
    this.setState({searchTermEncoded: encodeURI(event.target.value)});
  }
  
  
  render() {
    return (
      <SearchCard onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    );
  }
}

export default App;