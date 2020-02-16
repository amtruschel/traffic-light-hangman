import React from 'react';

class HangmanComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correctLastGuess: props.correctLastGuess,
      wrongGuessCount: props.wrongGuessCount
    }
  }

  render() {
    return(
      <div id="hangman">
        {this.output()}
      </div>
    )
  }

  output() {
    debugger
    return(
      <div>
        <p id="hangman-head"></p>
        <p id="hangman-body"></p>
        <p id="hangman-right-arm"></p>
        <p id="hangman-left-arm"></p>
        <p id="hangman-right-leg"></p>
        <p id="hangman-left-leg"></p>
      </div>
    )
  }

}

export default HangmanComponent;
