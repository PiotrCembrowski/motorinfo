import { db } from "./database.ts";

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
