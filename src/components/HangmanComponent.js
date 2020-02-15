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
      this.output()
    )
  }

  head() {
    return <div id="head"></div>
  }

  body() {
    return <div id="body"></div>
  }

  output() {
    return(
      <div>
        <div id="head"></div>
        <div id="body"></div>
      </div>
    )
  }



}

export default HangmanComponent;
