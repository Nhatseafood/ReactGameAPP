import { React, Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';

import * as gameActions from './game-browser.actions';
import * as gameHelpers from './game-browser.helpers';
import GameList from './game-list/game-list.component';

class GameBrowser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    }
  };

  componentDidMount() {
    this.props.getTopGames(1);
  }

  render() {
    console.log(this.props, " << gotta have my prop")
    const {topGames} = this.props;
    // console.log({topGames}, "<<<,TOP GAMES")
    // console.log(gameHelpers, "<<<<<GAMEHELPERS")
    // console.log(this.props.getTopGames(),"<<<<< getTopGames return this")
    const games = gameHelpers.getGamesList(topGames.response);


    return (
      <div>
        <AppBar title='Game Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <p>Game list will go here</p>
            <GameList games={games} isLoading={topGames.isLoading} />
          </Row>
        </Grid>
      </div>
    );
  }
}



export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    topGames: state.gameBrowser.topGames
  }),
  // Map action creators to properties of our component
  { ...gameActions }
)(GameBrowser);