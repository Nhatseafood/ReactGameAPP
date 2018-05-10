// import igdb from 'igdb-api-node';
 
// const client = igdb('9e9b5e75e3b34a3591faadb70da0ea4d');
 
// client.image({
//     cloudinary_id: ''
// }, 'cover_small', 'jpg');


const IGDB_IMAGE_BASE_URL = (width = 300) => `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/{hash}.jpg${width}`;

const updateGamePictureUrls = (gameResult, width = 300) => ({
  
      ...gameResult
      
    });
    


export const getGamesList = (gamesResponse) => {
  console.log(gamesResponse, " << gamesResponse")
  return !!gamesResponse ? ([
    ...gamesResponse.results.map(gameResult => updateGamePictureUrls(gameResult))
  ]) : null;
}