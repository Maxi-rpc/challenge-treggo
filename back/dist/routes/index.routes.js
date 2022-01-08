"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_routes_1 = __importDefault(require("./test.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const favorite_routes_1 = __importDefault(require("./favorite.routes"));
const router = (0, express_1.Router)();
router.use("/test", test_routes_1.default);
router.use("/login", user_routes_1.default);
router.use("/favorite", favorite_routes_1.default);
router.use("/character");
router.use("/planet");
router.use("/film");
exports.default = router;
