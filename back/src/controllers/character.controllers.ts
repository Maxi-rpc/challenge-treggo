import { Request, Response } from "express";
import { API_SWAPI } from "../services/index.services";

export const getCharacter = async (req: Request, res: Response) => {
  const charId = req.query.id;
  const charName = req.query.name;

  let data = await API_SWAPI.getPeop(charId, charName);

  res.send("controller getCharacter: " + charId + charName + " " + data);
};
