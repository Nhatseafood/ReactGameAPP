import {combineReducers} from 'redux';
import { createReducer} from '../common/redux.helpers';
// import { keys as movieActionKeys } from './movie-browser.actions';
// import movieModalReducer from './movie-modal/movie-modal.reducer';

const gameModalReducer = createReducer({ isOpen: false }, {

});

const gameBrowserReducer = combineReducers({
  gameModal: gameModalReducer
});

export default gameBrowserReducer;