import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../../actions/Pokemon';
import { Col } from 'react-bootstrap';

class PokemonItem extends Component {

    componentDidMount = () => {
        const { pokemon } = this.props;
        this.props.getPokemon({ url: pokemon.url });
    }

    handleSelect = (pokemon) => {
        this.props.onSelectPokemon(pokemon);
    }

    render() {
        const { pokemon } = this.props
        const mainImage = (pokemon.sprites) ? pokemon.sprites.front_default : null;
        if (mainImage) {
            return (
                <Col sm={4} >
                    <div className={'m-1 pokemon-item'}>
                        <img alt={pokemon.name} className={'pokemon-item-img'} onClick={() => this.handleSelect(pokemon)} src={mainImage} width={'80%'} />
                    </div>
                </Col>
            )
        } else {
            return (
                <Col  onClick={() => this.handleSelect(pokemon)} sm={4} >
                    <div className={'m-2 pokemon-item-nopicture'} >
                        {pokemon.name }
                    </div>
                </Col>
            )
        }
    }
}

const mapStateToProps = ({ pokeRedux }) => {
    const { pokemonList } = pokeRedux;
    return { pokemonList }
}

export default connect(mapStateToProps, { getPokemon })(PokemonItem);   