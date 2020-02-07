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
        <p>{this.state.revealedWord}</p>
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
      outputString += ' * '
    }
    return outputString
  }

  revealedWord() {
    return this.state.revealedWord;
  }

  guessLetter(letter) {
    var theSecretWord = this.state.secretWord;
    var correctGuess = (theSecretWord.includes(letter) ? true : false)
    var theRevealedWord = this.state.revealedWord;

    if (correctGuess) {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word.charAt(i) === letter) {
          // this.theRevealedWord.charAt(i) = letter
        }
      }
    }
  }


}

export default WordComponent;
