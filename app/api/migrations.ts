import { resolve } from "path";
import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
            CREATE TABLE IF NOT EXISTS brands (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                image_url TEXT NOT NULL
            )
        `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Brands table created successfuly.");
      }
    );
  });
};

export const apiGet = async (query: string) => {
  return await new Promise((resolve, reject) => {
    db.all(query, (err: Error, row) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(row);
    });
  });
};
