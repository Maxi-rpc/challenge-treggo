"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// imp controller
const index_controllers_1 = require("../controllers/index.controllers");
router.get("/", index_controllers_1.planet.Get);
exports.default = router;
