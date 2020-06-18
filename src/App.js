import React, { Component } from 'react';
import SearchCard from './Components/SearchCard';
import CardList from './Components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTermEncoded:"",
      searchRes: [],
      noResult: false
    };
  }
  

  onButtonSubmit = () => {
    const searchURL = 'https://itunes.apple.com/search?term=' + this.state.searchTermEncoded + '&limit=10';
    fetch(searchURL)
        .then(response => response.json())
        .then(data => {
          if(data.results[0]) {
            this.setState({searchRes: data.results, noResult: false})
          } else {
            this.setState({searchRes: [], noResult: true})
          }
        })
  }

  
  
  onInputChange = (event) => {
    this.setState({searchTermEncoded: encodeURI(event.target.value)});
  }
  
  
  render() {
    return (
      <div>
        <SearchCard onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <br></br>
        <CardList searchRes={this.state.searchRes} noResult={this.state.noResult} />
      </div>
    );
  }
}

export default App;