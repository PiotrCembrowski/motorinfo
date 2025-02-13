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
    length)
  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
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
