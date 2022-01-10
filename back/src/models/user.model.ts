import bcrypt from "bcrypt";

export interface User {
	email: "";
	password: "";
}

export const encrypt = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};
