import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
