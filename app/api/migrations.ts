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
    CREATE TABLE cars (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company TEXT NOT NULL,
        model TEXT NOT NULL,
        imageUrl TEXT,
        segment TEXT NOT NULL,
        door_options TEXT NOT NULL,
        
        benzyna_engine TEXT,
        benzyna_moc TEXT,
        benzyna_moment_obrotowy TEXT,
        benzyna_v_max TEXT,

        diesel_engine TEXT,
        diesel_moc TEXT,
        diesel_moment_obrotowy TEXT,
        diesel_v_max TEXT,

        hybrid_engine TEXT,
        hybrid_moc TEXT,
        hybrid_moment_obrotowy TEXT,
        hybrid_v_max TEXT,

        electric_engine TEXT,
        electric_moc TEXT,
        electric_moment_obrotowy TEXT,
        electric_v_max TEXT,

        charakterystyka TEXT NOT NULL,
        mileage TEXT NOT NULL,
        acceleration TEXT NOT NULL,
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
