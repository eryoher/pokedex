import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
//import SearchBox from 'components/common/searchBox';
import { connect } from 'react-redux';
import GridPokemons from '../../components/pokemon/gridPokemons';
import PokemonDetail from '../../components/pokemon/pokemonDetail';
import { searchPokemons, getPokemonAbility } from '../../actions';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: null,
    }
  }

  componentDidMount = () => {
    this.props.searchPokemons();
  }

  render() {
    const { theme, search, pokeability } = this.props;

    return (
      <Container>
        <Row>
          <Col sm={8} >
            {search && <GridPokemons pokemons={search.results} onSelectPokemon={selectedPokemon => this.setState({ selectedPokemon })} />}
          </Col>
          <Col sm={4}>
            <Container>
              <PokemonDetail
                handleGetAbility={this.props.getPokemonAbility}
                pokemon={this.state.selectedPokemon}
                pokeability={pokeability}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ pokeRedux }) => {
  const { search, pokeability } = pokeRedux;
  return { search, pokeability }
}


export default connect(mapStateToProps, { searchPokemons, getPokemonAbility })(Home);   