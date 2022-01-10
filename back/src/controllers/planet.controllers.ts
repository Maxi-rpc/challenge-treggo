import { Request, Response } from "express";

export const getPlanet = (req: Request, res: Response) => {
	res.send("controller getPlanet");
};
