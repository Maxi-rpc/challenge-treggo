"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.film = exports.planet = exports.character = exports.favorite = exports.user = void 0;
const user_controller_1 = require("./user.controller");
const favorite_controllers_1 = require("./favorite.controllers");
const character_controllers_1 = require("./character.controllers");
const planet_controllers_1 = require("./planet.controllers");
const film_controllers_1 = require("./film.controllers");
exports.user = {
    Login: user_controller_1.login,
};
exports.favorite = {
    Add: favorite_controllers_1.addFavorite,
    Del: favorite_controllers_1.delFavorite,
};
exports.character = {
    Get: character_controllers_1.getCharacter,
};
exports.planet = {
    Get: planet_controllers_1.getPlanet,
};
exports.film = {
    Get: film_controllers_1.getFilm,
};
