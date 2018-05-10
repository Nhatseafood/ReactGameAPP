import React from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, CardMedia} from 'material-ui';
// import {openGameModal} from '../game-modal/game-modal.actions';

// These are inline styles
// You can pass styles as objects using this convention
const styles = {
  cardTitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  cardMedia: {
    maxHeight: 394,
    overflow: 'hidden'
  },
  card: {
    cursor: 'pointer',
    height: 400,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%'
  }
};

class GameCardComponent extends React.Component {
  constructor(props) {
    super(props);
    // Track if the mouse hovering over the game card
    this.state = {
      isMouseOver: false
    };
  }
  
  render() {
    const {game, openGameModal} = this.props;
    // The subtitle won't render if it's null
    const subtitle = this.state.isMouseOver ? game.overview : null;

    return (
      <Card
        style={styles.card}
        onMouseOver={() => this.setState({isMouseOver: true})}
        onMouseLeave={() => this.setState({isMouseOver: false})}
      >
        {/* <CardTitle title={<div style={styles.cardTitle}>{game.title}</div>} /> */}
        <CardMedia
          style={styles.cardMedia}
          overlay={
            <CardTitle
              title={game.title} 
              subtitle={subtitle} 
            />
          }
        >
          <img style={styles.bgImage} src={game.poster_path} />
        </CardMedia>
      </Card>
    );
  }
}

export default GameCardComponent;