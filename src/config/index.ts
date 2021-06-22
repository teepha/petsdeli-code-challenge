import dotenv from "dotenv";
import { IConfig } from "config";

dotenv.config();

const config: IConfig = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
  db: {
    test: process.env.DB_URL_TEST,
    dev: process.env.DB_URL,
  },
};

export default config;
