import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'office-ui-fabric-react/lib/Link';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      searchResults: []
    }
  }

  _handleSearch = (searchQuery) => {

    let that = this;
    fetch('https://api.github.com/search/repositories?q=' + searchQuery)
      .then(function (response) {

        return response.json();

      }).then(function (data) {

        console.log(data);

        that.setState({
          searchResults: data.items,
          searchQuery: searchQuery
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <SearchBox
            placeholder="Search"
            onSearch={this._handleSearch}
          // onFocus={() => console.log('onFocus called')}
          // onBlur={() => console.log('onBlur called')}
          // onChange={() => console.log('onChange called')}
          />
          {this.state.searchResults.length > 0 && this.state.searchResults.map((result, index) =>
            <div key={index} className="ParentCard">


              <Card className={(index & 1) ? "card_odd" : "card_even"}>
                <CardContent>
                  <Typography className="classes" color="textSecondary" gutterBottom>{index + 1}</Typography>
                  <Typography variant="h5" component="h2">{result.name}</Typography>
                  <Typography component="p">{result.description}</Typography>
                  <Typography className="pos" color="textSecondary">Owner : <b>{result.owner.login}</b></Typography>
                  <Typography className="pos" color="textSecondary">Language : <b>{result.language}</b></Typography>
                  <Typography className="pos" color="textSecondary">Score : <b>{result.score}</b></Typography>

                  <Link target='_blank' href={result.svn_url}>link</Link>

                </CardContent>

              </Card>

            </div>
          )}

        </header>
      </div>
    );
  }
}



export default App;
