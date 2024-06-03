import { config } from "dotenv-safe";

config();

export default {
  port: process.env.PORT,
  salt: Number(process.env.SALT),
};
 