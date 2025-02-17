import { db } from "./database.ts";

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS brands (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        imageUrl TEXT NOT NULL
      );
    `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("brands table created successfully.");
      }
    );
  });

  db.run(
    `
    CREATE TABLE IF NOT EXISTS cars (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company TEXT NOT NULL,
        model TEXT NOT NULL,
        segment TEXT NOT NULL,
        door_options TEXT NOT NULL,
        silniki_benzyna TEXT,
        silniki_diesel TEXT,
        silniki_hybrid TEXT,
        silniki_electric TEXT,
        benzyna_moc TEXT,
        diesel_moc TEXT,
        hybrid_moc TEXT,
        electric_moc TEXT,
        benzyna_moment_obrotowy TEXT NOT NULL,
        diesel_moment_obrotowy TEXT NOT NULL,
        hybrid_moment_obrotowy TEXT NOT NULL,
        electric_moment_obrotowy TEXT NOT NULL,
        charakterystyka TEXT NOT NULL,
        mileage TEXT NOT NULL,
        acceleration TEXT NOT NULL,
        v_max TEXT NOT NULL,
        gears INTEGER NOT NULL,
        transmission_type TEXT NOT NULL,
        height TEXT NOT NULL,
        weight TEXT NOT NULL,
        length TEXT NOT NULL
    );
    `,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Cars table created successfully.");
      }
    }
  );
};

migrate();
