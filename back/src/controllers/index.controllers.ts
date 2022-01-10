import { login } from "./user.controller";
import { addFavorite, delFavorite } from "./favorite.controllers";
import { getCharacter } from "./character.controllers";
import { getPlanet } from "./planet.controllers";
import { getFilm } from "./film.controllers";

export const indexControllers = {
	login: login,
	addFav: addFavorite,
	delFav: delFavorite,
	getChar: getCharacter,
	getPlan: getPlanet,
	getFilm: getFilm,
};
