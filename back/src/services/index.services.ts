import { getPeople, getPlanet, getFilm, getFilmByName } from "./api.services";

export const API_SWAPI = {
	getPeop: getPeople,
	getPlan: getPlanet,
	getFilm: getFilm,
	getFilmByName: getFilmByName,
};
