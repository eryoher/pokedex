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
        return (
            <Col sm={4}>
                <img onClick={ () => this.handleSelect(pokemon)} src={mainImage} width={'80%'} />
            </Col>   
        )
    }
}

const mapStateToProps = ({pokeRedux}) => {
    const {pokemonList} = pokeRedux;
    return {pokemonList}
}

export default connect(mapStateToProps, {getPokemon})(PokemonItem);   