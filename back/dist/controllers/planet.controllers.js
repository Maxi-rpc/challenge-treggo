"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlanet = void 0;
const getPlanet = (req, res) => {
    const planet = req.params.character;
    res.send("controller getPlanet: " + planet);
};
exports.getPlanet = getPlanet;
