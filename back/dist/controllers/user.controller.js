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
exports.login = void 0;
const user_model_1 = require("../models/user.model");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = {
        message: "",
        token: "",
    };
    let user = {
        email: "",
        password: "",
        passHash: "",
    };
    const { email, password } = req.body;
    if (email === "" || password === "") {
        data.message = "email y/o password no pueden estar vacíos.";
    }
    else {
        user.email = email;
        user.password = password;
        user.passHash = yield (0, user_model_1.encrypt)(password);
        data.message = "login correcto";
        data.token = (0, user_model_1.create_token)(user.email);
    }
    res.json(data);
});
exports.login = login;
