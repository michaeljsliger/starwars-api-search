import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import ResultList from './ResultList.js';
import Header from './Header';

const api_url = 'https://swapi-thinkful.herokuapp.com/api';




class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      items: [{}],
      loading: false
    }
  }

  //on submit, fetch api to populate state, set loading to true, render something for that
handleSubmit = (event, selectVal, inputVal) => {
  event.preventDefault();
  this.setState({loading: true})
  console.log(selectVal, inputVal);
  fetch(`${api_url}/${selectVal}/${(inputVal) ? `?search=${inputVal}` : ''}`)
    .then(res => {
      if (!res.ok) {
        return {
          name: 'Search Error'
        }
      }
      return res.json()
    })
    .then(json => {
      this.setState({items: json.results, loading: false})
    }).catch(e => console.log(e))
}
 
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div>
          <SearchForm handleSubmit={this.handleSubmit}/>
        </div>
        <div className="results-box">
          {(!this.state.loading) ? <ResultList items={this.state.items}/> : <div><p>Loading...</p></div> }
        </div>
      </div>
    );
  }
}

export default App;
