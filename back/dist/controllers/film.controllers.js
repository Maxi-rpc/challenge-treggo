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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilm = void 0;
const index_services_1 = require("../services/index.services");
const getFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { character } = req.query;
    let data = yield index_services_1.API_SWAPI.getFilmByName(character);
    res.json(data);
});
exports.getFilm = getFilm;
