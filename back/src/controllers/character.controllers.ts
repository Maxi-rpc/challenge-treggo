import { Request, Response } from "express";

export const getCharacter = (req: Request, res: Response) => {
	const character = req.query.id;
	const char = req.query.name;
	res.send("controller getCharacter: " + character + char);
};
