// drizzle.config.ts
import { type Config } from "drizzle-kit";

const config: Config = {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["drive-clone_*"],
};

export default config;
