import React from 'react';
import randomWords from '../randomWords';

class WordComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: this.secretWord(),
      revealedWord: null
    }
  }

  componentDidMount() {
    this.setState( { revealedWord: this.setRevealedWord() });
  }

  componentWillUnmount() {
    this.setState( { secretWord: null } );
    this.setState( { revealedWord: null } );
  }

  render() {
    return (
        <p>{this.revealedWord()}</p>
    )
  }

  secretWord() {
    return randomWords().sort( () => Math.random() - 0.5).pop();
  }

  secretWordLength() {
    return this.state.secretWord.length;
  }

  setRevealedWord() {
    var length = this.state.secretWord.length
    var outputString = '';
    for (let i = 0; i < length; i++) {
      outputString += '*'
    }
    return outputString
  }

  revealedWord() {
    return this.state.revealedWord;
  }

  guessLetter(letter) {
    var secretWord = this.state.secretWord;
    var correctGuess = (secretWord.includes(letter) ? true : false)
    var revealedWord = this.state.revealedWord;
    var firstSubString = null;
    var lastSubString = null;

    if (correctGuess) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord.charAt(i) === letter) {
          if (i === 0) {
            firstSubString = letter
            lastSubString = revealedWord.substring(i + 1)
            this.setState( { revealedWord: firstSubString + lastSubString });
          } else {
            firstSubString = revealedWord.substring(0, i)
            lastSubString = revealedWord.substring((i + 1))
            this.setState( { revealedWord: firstSubString + letter + lastSubString });
          }
        }
      }
    }
  }


}

export default WordComponent;
