import axios from "axios";

const API_URL = "https://www.swapi.tech/api/";
const FILMS = "films/";
const PEOPLE = "people/";
const PLANETS = "planets/";

export const getPeople = async (id, name) => {
  let data = {};
  await axios
    .get(API_URL + PEOPLE + 1)
    .then((resp) => {
      data = resp.data.results;
    })
    .catch((error) => {
      data = error;
    });
  return data;
};
