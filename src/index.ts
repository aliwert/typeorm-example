import { createConnection } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "585858",
      database: "typeorm",
      entities: [Client, Banker, Transaction],
      synchronize: true,
      // logging: ["query", "schema"],
    });
    console.log("Connected to Postgres");
  } catch (error) {
    console.error(error);
    throw new Error("Error connecting to Postgres");
  }
};

main();
