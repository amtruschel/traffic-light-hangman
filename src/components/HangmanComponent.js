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
    return(
      <div>
        {this.state.wrongGuessCount > 0 &&
          <p id="hangman-head"></p>
        }
        {this.state.wrongGuessCount > 1 &&
          <p id="hangman-body"></p>
        }
        {this.state.wrongGuessCount > 2 &&
          <p id="hangman-right-arm"></p>
        }
        {this.state.wrongGuessCount > 3 &&
          <p id="hangman-left-arm"></p>
        }
        {this.state.wrongGuessCount > 4 &&
          <p id="hangman-right-leg"></p>
        }
        {this.state.wrongGuessCount > 5 &&
          <p id="hangman-left-leg"></p>
        }
      </div>
    )
  }

}

export default HangmanComponent;
