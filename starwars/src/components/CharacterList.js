import React, {useState, useEffect} from 'react';
import axios from 'axios'
// we will probably later need another component here likely the individual character component
import Character from './Character.js'
import ChrContainer from './CharacterContainer.js'

function RickAndMortyList() {
    const [data, setData] =  useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get("https://rickandmortyapi.com/api/character/")
            .then(res => {
                console.log(res.data.results)
                let eachCharacter = res.data.results;
                setData(eachCharacter);

            })
            .catch(err => {
                console.log('error', err)
            });
        };

        fetchData();
    }, []);
    

    return (
            <ChrContainer className="characters">
                {data.map(character => <Character data={character} key={character.name}/>)}
            </ChrContainer>
    );
}

export default RickAndMortyList;