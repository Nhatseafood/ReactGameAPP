import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer} from '../common/redux.helpers';
import { keys as gameActionKeys } from './game-browser.actions';
// import gameModalReducer from './game-modal/game-modal.reducer';
// Placeholder reducer for our game modal

const gameModalReducer = createReducer({ isOpen: false }, {

});

// This will create a new state with both the existing 
// games and new pages of games
const gamesSuccessReducer = (state, action) => {
  const existingGames = state.response ? state.response.results : [];
  // Create a new state object to be returned
  // When creating the new state, be sure to include any
  // existing properties we want to persist
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [
        ...existingGames,
        ...action.response.results
      ]
    }
  };
}

// Combines our game browser related reducers to build our gameBrowser reducer
const gameBrowserReducer = combineReducers({
    gameModal: gameModalReducer,
    gameInfo: createAsyncReducer(gameActionKeys.GET_GAME_INFO, {
      [`${gameActionKeys.GET_GAME_INFO}_SUCCESS`]: gamesSuccessReducer
    }),
    gameSearch: createAsyncReducer(gameActionKeys.SEARCH_GAMES, {
      [`${gameActionKeys.SEARCH_GAMES}_SUCCESS`]: gamesSuccessReducer
    }),
    gameRatings: createAsyncReducer(gameActionKeys.GET_RATINGS, {
      [`${gameActionKeys.GET_RATINGS}_SUCCESS`]: gamesSuccessReducer
    }),
    gameMostPopular: createAsyncReducer(gameActionKeys.TOP_GAMES, {
      [`${gameActionKeys.TOP_GAMES}_SUCCESS`]: gamesSuccessReducer
    })
});

export default gameBrowserReducer;