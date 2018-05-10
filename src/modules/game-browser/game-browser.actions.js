import {createAsyncActionCreator} from '../common/redux.helpers';
import * as gameService from './game-browser.service';

export const keys = {
  'GET_GAME_INFO': 'GET_GAME_INFO',
  'SEARCH_GAMES': 'SEARCH_GAMES',
  'GET_RATINGS': 'GET_RATINGS',
  'TOP_GAMES' : 'TOP_GAMES'
};

export const getGameInfo = (page) => createAsyncActionCreator(
  // actionType
  keys.GET_GAME_INFO,
  // requestFn
  gameService.getGameInfo, 
  // requestParams
  {page}
);

export const searchGames = (query, page) => createAsyncActionCreator(
  keys.SEARCH_GAMES,
  gameService.searchGames, 
  {query, page}
);

export const getRatings = (page) => createAsyncActionCreator(
  keys.GET_RATINGS,
  gameService.getRatings, 
  {page}
);


export const getTopGames = (page) => createAsyncActionCreator(
  keys.TOP_GAMES,
  gameService.getTopGames, 
  {page}
);
