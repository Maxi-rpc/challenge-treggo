"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
const user_controller_1 = require("./user.controller");
const favorite_controllers_1 = require("./favorite.controllers");
const character_controllers_1 = require("./character.controllers");
const planet_controllers_1 = require("./planet.controllers");
const film_controllers_1 = require("./film.controllers");
exports.indexControllers = {
    login: user_controller_1.login,
    addFav: favorite_controllers_1.addFavorite,
    delFav: favorite_controllers_1.delFavorite,
    getChar: character_controllers_1.getCharacter,
    getPlan: planet_controllers_1.getPlanet,
    getFilm: film_controllers_1.getFilm,
};
