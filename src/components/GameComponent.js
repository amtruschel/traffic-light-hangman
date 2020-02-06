import React from 'react';
import WordComponent from './WordComponent';

class GameComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <WordComponent/>
      </div>
    )
  }


}

export default GameComponent;
