import { Request, Response } from "express";
import { API_SWAPI } from "../services/index.services";

export const getCharacter = async (req: Request, res: Response) => {
  let data = {
    message: "",
    datos: {},
  };

  let { id, name } = req.query;

  data.datos = await API_SWAPI.getPeop(id, name);

  res.json(data);
};
