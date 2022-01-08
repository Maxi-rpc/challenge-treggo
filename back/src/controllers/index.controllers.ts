import { login } from "./user.controller";
import { addFavorite, delFavorite } from "./favorite.controllers";

export const indexControllers = {
	login: login,
	addFav: addFavorite,
	delFav: delFavorite,
};
