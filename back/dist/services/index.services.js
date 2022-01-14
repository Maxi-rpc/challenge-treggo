"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_SWAPI = void 0;
const api_services_1 = require("./api.services");
exports.API_SWAPI = {
    getPeop: api_services_1.getPeople,
    getPlan: api_services_1.getPlanet,
    getFilm: api_services_1.getFilm,
};
