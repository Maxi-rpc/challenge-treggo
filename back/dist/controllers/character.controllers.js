"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacter = void 0;
const getCharacter = (req, res) => {
    const character = req.query.id;
    const char = req.query.name;
    res.send("controller getCharacter: " + character + char);
};
exports.getCharacter = getCharacter;
