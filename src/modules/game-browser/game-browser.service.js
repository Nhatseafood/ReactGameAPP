import API_KEY from '../../my_secret_api_key.json';

const GAME_DB_API_KEY = API_KEY.key;
const GAME_DB_BASE_URL = 'https://api-endpoint.igdb.com';

const createGameDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${GAME_DB_BASE_URL}${relativeUrl}`
    // if (queryParams) {
    //   Object.keys(queryParams)
    //     .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    // }
    return baseUrl;
  }
  
  var myHeaders = new Headers({
    "user-key": "9e9b5e75e3b34a3591faadb70da0ea4d",
    "accept": "application/json"
});

  export const getGameInfo = async ({page}) => {
    const fullUrl = createGameDbUrl('/games/', {page});
    console.log(fullUrl , " << this is my fullUrl that needs a header") 
    return  fetch(fullUrl, {
        method: "GET",
        headers: myHeaders
      })
  }
  
  export const searchGames = async ({ page, query}) => {
    const fullUrl = createGameDbUrl('/games/?search=', {
      page,
      query
    });
    return fetch(fullUrl);
  }
  
  export const getRatings = async ({page}) => {
    const fullUrl = createGameDbUrl(`/private/rates/`, {
      page
    });
    return fetch(fullUrl);
  }

  export const getTopGames = async ({page}) => {
    console.log("get top games fired")
    const fullUrl = createGameDbUrl(`/games/?fields=name,popularity&order=popularity:desc`, {
      page
    });
    return fetch(fullUrl, {
      method: "GET",
      headers: myHeaders
    });
  }
