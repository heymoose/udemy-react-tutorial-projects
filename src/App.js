import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    key: '-1',
    inputText: ''
  }

  textUpdateHandler = (event) => {
    this.setState({ inputText: event.target.value })
  }

  deleteCharacterHandler = (charIndex) => {
    const characters = [...this.state.inputText.split('')];
    characters.splice(charIndex, 1);
    this.setState({ inputText: characters.join('') });
  }

  render() {
    let characters = (
      <div>
        {
          this.state.inputText.split('').map((c, index) => {
            return <CharComponent
              key={c}
              click={() => this.deleteCharacterHandler(index)} 
              character={c} />
          })
        }
      </div>
    );

    return (
      <div className="App">
        <input 
          type="text"
          onChange={(event) => this.textUpdateHandler(event)}
          value={this.state.inputText}>
        </input>
        <p>{this.state.inputText}</p>
        <ValidationComponent inputLength={this.state.inputText.length} />
        {characters}
      </div>
    );
  }
}

export default App;
