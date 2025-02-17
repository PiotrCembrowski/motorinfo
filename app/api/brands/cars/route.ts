import { apiPost, apiGet } from "../../database.ts";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const {
    company,
    model,
    segment,
    door_options,
    silniki_benzyna,
    silniki_diesel,
    silniki_hybrid,
    silniki_electric,
    silniki_moc,
    silniki_moment_obrotowy,
    charakterystyka,
    mileage,
    acceleration,
    v_max,
    gears,
    transmission_type,
    height,
    weight,
    length,
  } = body;

  const query = `
  INSERT INTO cars(
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
        length TEXT NOT NULL)
  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
`;

  const values = [
    company,
    model,
    segment,
    door_options,
    silniki_benzyna,
    silniki_diesel,
    silniki_hybrid,
    silniki_electric,
    silniki_moc,
    silniki_moment_obrotowy,
    charakterystyka,
    mileage,
    acceleration,
    v_max,
    gears,
    transmission_type,
    height,
    weight,
    length,
  ];

  let status, respBody;

  await apiPost(query, values)
    .then(() => {
      status = 200;
      respBody = { message: "Successfuly created car!" };
    })
    .catch((err) => {
      status = 400;
      respBody = err;
    });
  return Response.json(respBody, {
    status,
  });
}

export async function GET(req: Request, res: Response) {
  const query = `SELECT * from cars`;

  let status, body;
  try {
    await apiGet(query)
      .then((res) => {
        status = 200;
        body = res;
      })
      .catch((err: Error) => {
        status = 400;
        body = { error: err };
      });
    return Response.json(body, {
      status,
    });
  } catch (error: any) {
    console.error(error.message);
    return Response.json({ error: error }, { status: 400 });
  }
}
