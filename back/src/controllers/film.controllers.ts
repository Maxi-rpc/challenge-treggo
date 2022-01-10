import { Request, Response } from "express";

export const getFilm = (req: Request, res: Response) => {
	res.send("controller getFilm");
};
