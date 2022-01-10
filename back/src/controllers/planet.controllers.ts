import { Request, Response } from "express";

export const getPlanet = (req: Request, res: Response) => {
	const planet = req.params.character;
	res.send("controller getPlanet: " + planet);
};
