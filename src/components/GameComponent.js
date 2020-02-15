import React from 'react';
import HangmanComponent from './HangmanComponent'
import randomWords from '../randomWords';

class GameComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: this.secretWord().toLowerCase(),
      revealedWord: '',
      guess: '',
      correctLastGuess: 'false',
      message: 'guess a letter',
      wrongGuessCount: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState( { revealedWord: this.setRevealedWord() });
  }

  componentWillUnmount() {
    this.setState( { secretWord: '' } );
    this.setState( { revealedWord: '' } );
    this.setState( { guess: '' } );
    this.setState( { correctLastGuess: false } );
    this.setState( { message: '' } );
  }

  render() {
    return (
      <div>
        <div id="message">
          <p>{this.message()}</p>
        </div>
        <div id="hangman">
          <HangmanComponent correctLastGuess={this.state.correctLastGuess} wrongGuessCount={this.state.wrongGuessCount}/>
        </div>
        <br />
        <div id="revealedWord">
          <p>{this.revealedWord()}</p>
        </div>
        <div id="guessForm">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="guess" id="guess" value={this.state.guess} onChange={this.handleChange} placeholder="guess a letter" />
            <br />
            <button type="submit">guess</button>
          </form>
        </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState({guess: event.target.value});
  }

  handleSubmit(event) {
    this.guessLetter(event.target.guess.value.toLowerCase());
    this.setState({ guess: '' })
    event.preventDefault();
  }

  secretWord() {
    return randomWords().sort( () => Math.random() - 0.5).pop();
  }

  message() {
    return this.state.message;
  }

  setMessage() {
    if (this.isWordRevealed()) {
      this.setState({ message: 'you win!' });
    } else if (this.lastGuess() === 'true') {
      this.setState({ message: 'nice, keep going' });
    } else if (this.lastGuess() === 'same') {
      this.setState({ message: 'already guessed that correct letter' });
    } else {
      this.setState({ message: 'try again' });
    }
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

  isWordRevealed() {
    return (this.state.revealedWord.includes('*') ? false : true)
  }

  lastGuess() {
    return this.state.correctLastGuess;
  }

  guessLetter(letter) {
    var secretWord = this.state.secretWord;
    var correctGuess = (secretWord.includes(letter) ? true : false)
    var revealedWord = this.state.revealedWord;
    var firstSubString = null;
    var lastSubString = null;
    var localRevealedWord = revealedWord;

    if (revealedWord.includes(letter)) {
      this.setState({ correctLastGuess: 'same' }, () => this.setMessage());
      return;
    }

    if (correctGuess) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord.charAt(i) === letter) {
          if (i === 0) {
            firstSubString = letter
            lastSubString = localRevealedWord.substring(i + 1)
            localRevealedWord = firstSubString + lastSubString
          } else {
            firstSubString = localRevealedWord.substring(0, i)
            lastSubString = localRevealedWord.substring((i + 1))
            localRevealedWord = firstSubString + letter + lastSubString
          }
        }
      }
      this.setState({ revealedWord: localRevealedWord });
      this.setState({ correctLastGuess: 'true'}, () => this.setMessage());
    } else {
      this.setState({ correctLastGuess: 'false'}, () => this.setMessage());
    }
  }

}

export default GameComponent;
