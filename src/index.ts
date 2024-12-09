import { createConnection } from "typeorm";

const main = async () => {
  try {
    const connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "585858",
      database: "typeorm",
    });
    console.log("Connected to Postgres");
  } catch (error) {
    console.log("Error: ", error);
  }
};

main();
