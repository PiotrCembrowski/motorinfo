import { apiPost } from "../../database.ts";

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
