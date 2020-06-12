// Write your Character component here
import React from 'react';
import PStyle from './CharacterStyles.js'
import CardStyles from './CharacterCardStyle.js'


function Character(props) {
    return (
        <CardStyles>
            <img src={`https://rickandmortyapi.com/api/character/avatar/${props.data.id}.jpeg`}/>
            <PStyle>NAME: --{props.data.name}--</PStyle>
            <PStyle>STATUS: --{props.data.species}--</PStyle>
            <PStyle>SPECIES: --{props.data.status}--</PStyle>
        </CardStyles>
    )
}

export default Character;