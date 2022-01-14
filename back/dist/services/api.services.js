"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilmByName = exports.getFilm = exports.getPlanet = exports.getPeople = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = "https://www.swapi.tech/api/";
const FILMS = "films/";
const PEOPLE = "people/";
const PLANETS = "planets/";
const getAxios = (url) => __awaiter(void 0, void 0, void 0, function* () {
    let data = {};
    yield axios_1.default
        .get(url)
        .then((resp) => {
        data = resp.data;
    })
        .catch((err) => {
        data = err;
    });
    return data;
});
const getPeople = (id = "", name = "") => __awaiter(void 0, void 0, void 0, function* () {
    let data = {};
    let search = API_URL + PEOPLE;
    if (name) {
        search += "?name=" + name;
    }
    else if (id) {
        search += id;
    }
    data = yield getAxios(search);
    return data;
});
exports.getPeople = getPeople;
const getPlanet = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let people = yield (0, exports.getPeople)(id);
    let data = yield getAxios(people.result.properties.homeworld);
    return data;
});
exports.getPlanet = getPlanet;
const getFilm = () => __awaiter(void 0, void 0, void 0, function* () {
    let search = API_URL + FILMS;
    let data = yield getAxios(search);
    return data;
});
exports.getFilm = getFilm;
const getFilmByName = (name) => {
    let data = {};
    return data;
};
exports.getFilmByName = getFilmByName;
