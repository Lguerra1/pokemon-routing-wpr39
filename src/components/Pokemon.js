import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Pokemon extends Component {
  constructor() {
    super()

    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`).then((response) => {
      this.setState({pokemon: response.data})
    })
  }

  render() {
    console.log(this.state.pokemon)
    return(
      <div>
        <h1>{this.state.pokemon.name}</h1>
        <img src={this.state.pokemon.sprites ? this.state.pokemon.sprites.front_default : ''} />
        <Link to="/"><button>Search Again</button></Link>
      </div>
    )
  }
}