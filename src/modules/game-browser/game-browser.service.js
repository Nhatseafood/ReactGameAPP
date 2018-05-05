const GAME_DB_API_KEY = '9e9b5e75e3b34a3591faadb70da0ea4d';
const GAME_DB_BASE_URL = 'https://api-endpoint.igdb.com';

const createGameDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${GAME_DB_BASE_URL}${relativeUrl}?api_key=${GAME_DB_API_KEY}&language=en-US`;
    if (queryParams) {
      Object.keys(queryParams)
        .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return baseUrl;
  }
  
  export const getGameInfo = async ({page}) => {
    const fullUrl = createGameDbUrl('/games/1942?fields=*', {
      page
    });
    return fetch(fullUrl);
  }
  
  export const searchGames = async ({ page, query}) => {
    const fullUrl = createGameDbUrl('/games/?search=Halo&fields=*', {
      page,
      query
    });
    return fetch(fullUrl);
  }
  
  export const getRatings = async ({page}) => {
    const fullUrl = createGameDbUrl(`/private/rates/`);
    return fetch(fullUrl);
  }