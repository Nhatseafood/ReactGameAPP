import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';

class GameBrowser extends React.Component {
  render() {
    return (
      <div>
        <AppBar title='Game Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <p>Game list will go here</p>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GameBrowser;