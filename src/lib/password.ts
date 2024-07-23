import { Argon2id } from "oslo/password";

const argon2id = new Argon2id();

export const hashPassword = async (password: string) => {
	return await argon2id.hash(password);
};

export const verifyPassword = async (hash: string, password: string) => {
	const validPassword = await argon2id.verify(hash, password);
	return validPassword;
};
