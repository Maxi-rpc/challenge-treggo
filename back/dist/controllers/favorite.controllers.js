"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delFavorite = exports.addFavorite = void 0;
const addFavorite = (req, res) => {
    res.send("controller addFav");
};
exports.addFavorite = addFavorite;
const delFavorite = (req, res) => {
    res.send("controller delFav");
};
exports.delFavorite = delFavorite;
