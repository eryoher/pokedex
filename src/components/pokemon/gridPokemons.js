import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getPokemon, fetchPokemons } from '../../actions/Pokemon';
import PokemonItem from '../pokemon/pokemonItem';
import InfiniteScroll from 'react-infinite-scroll-component';

class GridPokemons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokeSearch: [],
            nextPageUrl: this.props.search.next,
            infinitHasMore: true
        }
    }

    componentDidMount = () => {
        const { pokemons } = this.props;
        this.props.getPokemon(pokemons);
    }

    handleFetchdata = () => {                
        this.props.fetchPokemons({ url: this.state.nextPageUrl })
    }

    
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.pokemonList !== this.props.pokemonList) { 
            const { pokemonList } = nextProps;
            const pokemons = pokemonList.map(pokemon => {
                return pokemon.data
            });
            this.setState({ pokeSearch: pokemons })
        }

        if( this.props.fetchpokemons !== nextProps.fetchpokemons && !this.props.fetchpokemons ){            
            this.props.getPokemon(nextProps.fetchpokemons.results);   
            if (nextProps.fetchpokemons.next){         
                this.setState({nextPageUrl:nextProps.fetchpokemons.next})
            }else{
                this.setState({infinitHasMore:false})
            }
        }
        
        if( !nextProps.search.next  ){            
            this.setState({infinitHasMore:false})
        }
    }

    renderPokemons = () => {
        const { pokeSearch } = this.state;
        const result = [];
        pokeSearch.forEach((pokemon, index) => {
            result.push(<PokemonItem key={index} pokemon={pokemon} onSelectPokemon={this.props.onSelectPokemon} />);
        });

        return result;
    }

    render() {   
        const { searchError } = this.props           
        return (
            <div id={'scrollableDiv'} style={{ height: '800px', overflow: 'auto', overflowX: 'hidden' }}>
                {!searchError && <InfiniteScroll
                    dataLength={this.state.pokeSearch.length} //This is important field to render the next data
                    next={this.handleFetchdata}
                    hasMore={this.state.infinitHasMore}
                    loader={<div className={"w-100"}><h3>Loading...</h3></div>}
                    scrollableTarget="scrollableDiv"
                >
                    <Row>
                        {this.renderPokemons()}
                    </Row>
                </InfiniteScroll>}
                { searchError && <Col className={"error-search"} sm={12}>
                    {searchError.message}
                </Col> }
            </div>
        )
    }
}

const mapStateToProps = ({ pokeRedux }) => {
    const { search, pokemonSearch, pokemonList, fetchpokemons, searchError } = pokeRedux;
    return { search, pokemonSearch, pokemonList, fetchpokemons, searchError }
}



export default connect(mapStateToProps, { getPokemon, fetchPokemons })(GridPokemons);   