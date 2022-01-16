import { login } from "./user.controller";
import { addFavorite, delFavorite } from "./favorite.controllers";
import { getCharacter } from "./character.controllers";
import { getPlanet } from "./planet.controllers";
import { getFilm } from "./film.controllers";

export const user = {
	Login: login,
};

export const favorite = {
	Add: addFavorite,
	Del: delFavorite,
};

export const character = {
	Get: getCharacter,
};

export const planet = {
	Get: getPlanet,
};

export const film = {
	Get: getFilm,
};
