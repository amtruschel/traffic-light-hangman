import React from 'react';

class HangmanComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
        <div id="hangman-wrapper">
          {this.props.wrongGuessCount === 1 &&
            <div className="row">
              <div className="col">
                <div className="wrong-one"></div>
              </div>
            </div>
          }
          {this.props.wrongGuessCount === 2 &&
            <div className="row">
              <div className="col">
                <div className="wrong-one"></div>
              </div>
              <div className="col">
                <div className="wrong-two"></div>
              </div>
            </div>
          }
          {this.props.wrongGuessCount === 3 &&
            <div className="row">
              <div className="col">
                <div className="wrong-one"></div>
              </div>
              <div className="col">
                <div className="wrong-two"></div>
              </div>
              <div className="col">
                <div className="wrong-three"></div>
              </div>
            </div>
          }
          {this.props.wrongGuessCount === 4 &&
            <div className="row">
              <div className="col">
                <div className="wrong-one"></div>
              </div>
              <div className="col">
                <div className="wrong-two"></div>
              </div>
              <div className="col">
                <div className="wrong-three"></div>
              </div>
              <div className="col">
                <div className="wrong-four"></div>
              </div>
            </div>
          }
          {this.props.wrongGuessCount === 5 &&
            <div className="row">
              <div className="col">
                <div className="wrong-one"></div>
              </div>
              <div className="col">
                <div className="wrong-two"></div>
              </div>
              <div className="col">
                <div className="wrong-three"></div>
              </div>
              <div className="col">
                <div className="wrong-four"></div>
              </div>
              <div className="col">
                <div className="wrong-five"></div>
              </div>
            </div>
          }
        </div>
      )
    }

}

export default HangmanComponent;
