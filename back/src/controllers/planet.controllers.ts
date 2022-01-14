import { Request, Response } from "express";
import { API_SWAPI } from "../services/index.services";

export const getPlanet = async (req: Request, res: Response) => {
	let { character } = req.query;
	const data = await API_SWAPI.getPlan(character);
	res.json(data);
};
