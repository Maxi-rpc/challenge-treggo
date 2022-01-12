import axios from "axios";

const API_URL = "https://www.swapi.tech/api/";
const FILMS = "films/";
const PEOPLE = "people/";
const PLANETS = "planets/";

export const getPeople = async (id = "", name = "") => {
  let data = {};
  let search = "";
  if (name) {
    search = ":name=" + name;
  } else if (id) {
    search = id;
  }

  await axios
    .get(API_URL + PEOPLE + search)
    .then((resp) => {
      data = resp.data;
    })
    .catch((error) => {
      data = error;
    });
  return data;
};
