import { Request, Response } from "express";

export const addFavorite = (req: Request, res: Response) => {
	res.send("controller addFav");
};

export const delFavorite = (req: Request, res: Response) => {
	res.send("controller delFav");
};
