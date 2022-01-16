import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export interface User {
	email: "";
	password: "";
}

export const encrypt = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};

export const create_token = (email: string) => {
	const token = jwt.sign(
		{
			email: email,
		},
		process.env.TOKEN_SECRET || "tokentest"
	);

	return token;
};
