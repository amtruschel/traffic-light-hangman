import React from 'react';
import randomWords from '../randomWords';

class WordComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: this.secretWord().toLowerCase(),
      revealedWord: '',
      guess: '',
      correctLastGuess: false,
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState( { revealedWord: this.setRevealedWord() });
  }

  componentWillUnmount() {
    this.setState( { secretWord: null } );
    this.setState( { revealedWord: null } );
    this.setState( { guess: '' } );
    this.setState( { message: '' } );
    this.setState( { correctLastGuess: false });
  }

  render() {
    return (
      <div>
        <p>{this.message()}</p>
        <br />
        <br />
        <p>{this.revealedWord()}</p>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="guess" id="guess" value={this.state.guess} onChange={this.handleChange} placeholder="guess a letter" />
          <br />
          <button type="submit">guess</button>
        </form>
      </div>
    )
  }

  handleChange(event) {
    this.setState({guess: event.target.value});
  }

  handleSubmit(event) {
    this.guessLetter(event.target.guess.value.toLowerCase());
    event.preventDefault();
  }

  secretWord() {
    return randomWords().sort( () => Math.random() - 0.5).pop();
  }

  message() {
    return this.state.message;
  }

  // setMessage() {
  //   if (this.isWordRevealed()) {
  //     this.setState({ message: 'you win!' });
  //   } else if (this.state.correctLastGuess) {
  //     this.setState({ message: 'nice! keep going' });
  //   } else {
  //     this.setState({ message: 'sorry, guess again' });
  //   }
  // }

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
            this.setState({ revealedWord: firstSubString + letter + lastSubString });
          }
          this.setState({ correctLastGuess: true })
        }
      }
    }

    this.setState({ guess: '' });
  }

}

export default WordComponent;
