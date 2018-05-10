import React from 'react';
import {Row, Col} from 'react-bootstrap';
import GameCard from '../game-card/game-card.component';
import LoaderIcon from '../../common/loader.component';

const styles = {
  gameColumn: {
    marginBottom: 20
  }
}
const GameList = ({games, isLoading}) => {
  console.log("gamelist has game object >> ", games)
  const gameColumns = games ? games.map(game => (
    <Col style={styles.gameColumn} key={game.id} xs={12} sm={4} md={3} lg={3}>
      <GameCard game={game} />
    </Col>
  )) : null;
  
  return (
    <Row>
      {gameColumns}
      <LoaderIcon isLoading={isLoading} />
    </Row>
  );
}

export default GameList;