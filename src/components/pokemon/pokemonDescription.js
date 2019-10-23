import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPokemonDescription } from '../../actions';

class PokemonDescription extends Component {

    componentDidMount = () => {
        const { url } = this.props;
        this.props.getPokemonDescription({url})
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.url !== this.props.url){
            const { url } = this.props;
            this.props.getPokemonDescription({url})
        }
    }

    render() {
        const { pokedescription } = this.props;
        return (
            <div className={'text-justify'}>
                {pokedescription}
            </div>
        )
    }
}

const mapStateToProps = ({ pokeRedux }) => {
    const { pokedescription } = pokeRedux;
    return { pokedescription }
  }
  
  
export default connect(mapStateToProps, { getPokemonDescription })(PokemonDescription);  
