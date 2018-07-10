import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      input: ''
    }
  }

  handleChange(value) {
    this.setState({
      input: value
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <h1>Pokemon lookeruper</h1>
        <input value={this.state.input} onChange={(e) => this.handleChange(e.target.value)} />
      <Link to={`/pokemon/${this.state.input}`}><button>Search</button></Link>
      </div>
    )
  }
}