export const baseUrl = "http://localhost:5096/api/";
export const getGanresUrl = "ganres/get-ganres";
export const getNewsUrl = "news/get-news";
export const getGamesUrl = "game/get-games";
export const signInUrl = "register/register";
export const signUpUrl = "register/sign-up";
export const getMyGamesUrl = "game/get-my-games";
export const getGameUrl = (gameId: number) => `game/get-game?id=${gameId}`;