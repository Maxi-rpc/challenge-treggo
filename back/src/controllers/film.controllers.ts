import { Request, Response } from "express";

export const getFilm = (req: Request, res: Response) => {
	const film = req.params.character;
	res.send("controller getFilm:" + film);
};
