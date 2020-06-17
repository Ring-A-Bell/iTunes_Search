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
    const searchURL = 'https://itunes.apple.com/search?term=' + this.state.searchTermEncoded + '&limit=10';
    fetch(searchURL)
        .then(response => response.json())
        .then(data => {
          if(data.results)
            {console.log(data.results);}
          else
          console.log("No");
        })
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