import { Request, Response } from "express";

export const getCharacter = (req: Request, res: Response) => {
	res.send("controller getCharacter");
};
