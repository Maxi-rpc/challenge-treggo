"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// imp routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const app = (0, express_1.default)();
// settings
app.set("port", 4000);
// middlewares
app.use(express_1.default.json());
//routes
app.use("/api/v1", index_routes_1.default);
exports.default = app;
