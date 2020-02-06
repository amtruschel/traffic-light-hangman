import React from 'react';
import randomWords from '../randomWords';

class WordComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: this.secretWord(),
      revealedWord: this.setRevealedWord()
    }
  }

  render() {
    return (
      <p>{this.secretWordLength()}</p>
    )
  }

  secretWord() {
    return randomWords().sort( () => Math.random() - 0.5).pop();
  }

  secretWordLength() {
    return this.state.secretWord.length;
  }

  setRevealedWord() {
    const length = this.secretWordLength() - 1
    const outputString = '';
    for (i = 0; i < length; i++) {
      outputString += '*'
    }
    return outputString
  }

  guessLetter(letter) {
    const word = this.state.secretWord;
    const correctGuess = (word.includes(letter) ? true : false)
    const revealedWord = this.state.revealedWord;

    if (correctGuess) {
      for (i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
          revealedWord.charAt(i) = letter
        }
      }
    }
  }



  emptyLetters() {
    for (i = 0; i < (this.secretWordLength() - 1); i++) {
      <p>_</p>
    });
  }



}

export default WordComponent;
