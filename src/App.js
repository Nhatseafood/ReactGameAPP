import React, { Component } from 'react';
import GameBrowser from './modules/game-browser/game-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      // Provides the Material UI theme to child components
      
      <MuiThemeProvider>
        <GameBrowser />
      </MuiThemeProvider>
     
    );
  }
}

export default App;
