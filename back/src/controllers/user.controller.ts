import { Request, Response } from "express";
import { encrypt, create_token } from "../models/user.model";

export const login = async (req: Request, res: Response) => {
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
	} else {
		user.email = email;
		user.password = password;
		user.passHash = await encrypt(password);

		data.message = "login correcto";
		data.token = create_token(user.email);
	}

	res.json(data);
};
