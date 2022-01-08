"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// imp controller
const index_controllers_1 = require("../controllers/index.controllers");
router.post("/", index_controllers_1.indexControllers.addFav);
router.delete("/", index_controllers_1.indexControllers.delFav);
exports.default = router;
