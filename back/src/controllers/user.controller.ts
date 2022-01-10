import { Request, Response } from "express";
import { encrypt } from "../models/user.model";

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const passHash = await encrypt(password);

	res.send("controller login: " + email + passHash);
};
