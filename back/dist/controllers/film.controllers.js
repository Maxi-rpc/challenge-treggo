"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilm = void 0;
const getFilm = (req, res) => {
    const film = req.params.character;
    res.send("controller getFilm:" + film);
};
exports.getFilm = getFilm;
