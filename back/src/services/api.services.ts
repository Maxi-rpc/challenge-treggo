import axios from "axios";

const API_URL = "https://www.swapi.tech/api/";
const FILMS = "films/";
const PEOPLE = "people/";
const PLANETS = "planets/";

const getAxios = async (url: string) => {
	let data = {};
	await axios
		.get(url)
		.then((resp) => {
			data = resp.data;
		})
		.catch((err) => {
			data = err;
		});
	return data;
};

export const getPeople = async (id = "", name = "") => {
	let data = {};
	let search = API_URL + PEOPLE;
	if (name) {
		search += "?name=" + name;
	} else if (id) {
		search += id;
	}

	data = await getAxios(search);

	return data;
};

export const getPlanet = async (id: string) => {
	let people = await getPeople(id);
	let data = await getAxios(people.result.properties.homeworld);
	return data;
};

export const getFilm = async () => {
	let search = API_URL + FILMS;
	let data = await getAxios(search);
	return data;
};

export const getFilmByName = (name: string) => {
	let data = {};

	return data;
};
