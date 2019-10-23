import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PokemonDescription from './pokemonDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default class PokemonDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAbility: false,
            abilityName:''
        }
    }

    renderTypes = (types) => {
        const typeResult = [];

        types.forEach((liType, index) => {
            typeResult.push(
                <li key={index} className={'attribute-value-item'} >
                    {liType.type.name}
                </li>
            )
        });
        return typeResult;
    }

    renderAbilities = (abilities) => {
        const result = [];

        abilities.forEach((abiltlist, index) => {
            result.push(
                <li key={index} className={'attribute-value-item'} >
                    {`${abiltlist.ability.name}  `}
                    <FontAwesomeIcon icon={faQuestionCircle} onClick={() => this.handleShowAbility(abiltlist.ability)} style={{ cursor: 'pointer' }} />
                </li>
            )
        });
        return result;
    }

    handleShowAbility = (ability) => {          
        this.props.handleGetAbility({url:ability.url});
        this.setState({showAbility:true, abilityName:ability.name});
    }

    handleCloseAbility = () => {
        this.setState({showAbility:false});
    }

    renderDetail = (pokemon) => {
        //console.log(pokemon)

        const { showAbility } = this.state;    
        const { pokeability } = this.props;    
        const abilityDiv = (showAbility) ? 'ability-div-show' : 'ability-div-hidden';        
        return (
            <>
                <Col sm={12} className={'text-center detail-title'} > {pokemon.name} </Col>
                <Col sm={12} className={'text-center detail-description pl-0 pr-0 pb-3'} >
                    <PokemonDescription url={pokemon.species.url} />
                </Col>
                <Row sm={12} className={'detail-stadistic mr-0 ml-0'}>
                    <div className={`ability-div ${abilityDiv}`}>
                        <Col className={"text-right pt-2"} sm={{span:2, offset:10}} >
                            <FontAwesomeIcon onClick={this.handleCloseAbility} icon={faTimesCircle} style={{cursor:'pointer'}}  /> 
                        </Col>
                        <Container className={"mt-2"}>
                            <Col className={'ability-name mb-3'} sm={12}>
                                {this.state.abilityName}
                            </Col>
                            <Col className={'ability-description'} sm={12}>
                                {pokeability}     
                            </Col>
                            
                        </Container>
                       
                    </div>
                    <Col sm={12}>
                        <ul>
                            <li className={'attribute-title'}>Id</li>
                            <li className={'attribute-value'}>{pokemon.id}</li>
                            <li className={'attribute-title'}>Name</li>
                            <li className={'attribute-value'}>{pokemon.name}</li>
                            <li className={'attribute-title'}>Type</li>
                            {this.renderTypes(pokemon.types)}
                            <li className={'attribute-title'}>Ability</li>
                            {this.renderAbilities(pokemon.abilities)}
                        </ul>
                    </Col>
                </Row>
            </>

        )
    }

    render() {
        const { pokemon } = this.props
        return (
            <>
                {pokemon && this.renderDetail(pokemon)}
            </>
        )
    }
}
