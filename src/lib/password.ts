import { Argon2id } from "oslo/password";

const argon2id = new Argon2id();

export async function hashPassword(password: string) {
  return await argon2id.hash(password);
}

export async function verifyPassword(hash: string, password: string) {
  return await argon2id.verify(hash, password);
}
