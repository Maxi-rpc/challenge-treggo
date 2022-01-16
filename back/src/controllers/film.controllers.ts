import { Request, Response } from "express";
import { API_SWAPI } from "../services/index.services";

export const getFilm = async (req: Request, res: Response) => {
	let { character } = req.query;
	let data = await API_SWAPI.getFilmByName(character);
	res.json(data);
};
