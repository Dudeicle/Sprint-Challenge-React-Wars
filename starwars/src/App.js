import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList.js'
import BodyStyle from './components/BodyStyles.js'
import ChrContainer from './components/CharacterContainer.js'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <BodyStyle>
    <ChrContainer className="App">
      <CharacterList />
    </ChrContainer>
    </BodyStyle>
  );
}

export default App;
