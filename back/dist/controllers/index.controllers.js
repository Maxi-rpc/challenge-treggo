"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
const user_controller_1 = require("./user.controller");
const favorite_controllers_1 = require("./favorite.controllers");
exports.indexControllers = {
    login: user_controller_1.login,
    addFav: favorite_controllers_1.addFavorite,
    delFav: favorite_controllers_1.delFavorite,
};
