/* eslint-disable */
import { apiPost, apiGet } from "../../database.ts";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    company,
    model,
    imageUrl,
    segment,
    door_options,
    benzyna_engine,
    benzyna_moc,
    benzyna_moment_obrotowy,
    benzyna_v_max,
    diesel_engine,
    diesel_moc,
    diesel_moment_obrotowy,
    diesel_v_max,
    hybrid_engine,
    hybrid_moc,
    hybrid_moment_obrotowy,
    hybrid_v_max,
    electric_engine,
    electric_moc,
    electric_moment_obrotowy,
    electric_v_max,
    charakterystyka,
    mileage,
    acceleration,
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
        imageUrl,
        segment,
        door_options,
        
        benzyna_engine,
        benzyna_moc,
        benzyna_moment_obrotowy,
        benzyna_v_max,

        diesel_engine,
        diesel_moc,
        diesel_moment_obrotowy,
        diesel_v_max,

        hybrid_engine,
        hybrid_moc,
        hybrid_moment_obrotowy,
        hybrid_v_max,

        electric_engine,
        electric_moc,
        electric_moment_obrotowy,
        electric_v_max,

        charakterystyka,
        mileage,
        acceleration,
        gears,
        transmission_type,
        height,
        weight,
        length)
  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
`;

  const values = [
    company,
    model,
    imageUrl,
    segment,
    door_options,
    benzyna_engine,
    benzyna_moc,
    benzyna_moment_obrotowy,
    benzyna_v_max,
    diesel_engine,
    diesel_moc,
    diesel_moment_obrotowy,
    diesel_v_max,
    hybrid_engine,
    hybrid_moc,
    hybrid_moment_obrotowy,
    hybrid_v_max,
    electric_engine,
    electric_moc,
    electric_moment_obrotowy,
    electric_v_max,
    charakterystyka,
    mileage,
    acceleration,
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
export async function GET() {
  const query = `SELECT * from cars`;

  let status, body;
  try {
    await apiGet(query)
      .then((data) => {
        status = 200;
        body = data;
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
