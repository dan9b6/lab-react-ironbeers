import React, { Component } from 'react';
import Header from './../../Components/Header';
import { List } from './../../Services/beer';

import SingleBeerDisplayInList from './../../Components/SingleBeerDisplayInList';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: [] };
  }

  componentDidMount() {
    List()
      .then(beers => {
        //console.log(beers);
        this.setState({ beers });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beers.map(beer => <SingleBeerDisplayInList key={beer._id} {...beer} />) || (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
