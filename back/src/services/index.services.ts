import { getPeople, getPlanet, getFilm } from "./api.services";

export const API_SWAPI = {
	getPeop: getPeople,
	getPlan: getPlanet,
	getFilm: getFilm,
};
